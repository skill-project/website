<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    class SkillManager extends Manager {

        private $searchIndex;

        public function __construct(){
            parent::__construct();
            $this->createSearchIndex();
        }

        /**
         * Find and return the top skill node
         * @return mixed
         */
        public function findRootNode(){
            $cyp = 'MATCH (skill:Skill {name: "Skills"}) RETURN skill LIMIT 1';
            $query = new Query($this->client, $cyp);
            $resultSet = $query->getResultSet();
            
            if ($resultSet->count() == 1){
                $rootNode = $resultSet[0]['skill'];
                $skill = new Skill( $rootNode );
                return $skill;
            }
            return false;
        }



        /**
         * Find skill children
         * @param string Parent uuid
         * @return mixed Array if success, false otherwise
         */
        public function findChildren($uuid){
            $cyp = "MATCH (parent:Skill)-[:HAS]->(s:Skill) 
                        WHERE parent.uuid = {uuid}
                        RETURN s ORDER BY s.created ASC LIMIT 40";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            if ($resultSet->count() > 0){
                $data = array();
                foreach ($resultSet as $row) {
                    $skill = new Skill( $row['s'] );
                    $data[] = $skill->getJsonData();
                }
                return $data;
            }
            return false;
        }


        /**
         * Retrieve all nodes at a specified depth
         * @param int depth
         * @return array
         */
        public function findAtDepth($depth){
            $cyp = "MATCH (s:Skill)
                        WHERE s.depth = {depth}
                        RETURN s
                        ORDER BY s.created ASC";
            $query = new Query($this->client, $cyp, array("depth" => $depth));
            $resultSet = $query->getResultSet();

            return $resultSet;
        }

        /**
         * Retrieve all modifications on a skill (including creation)
         * @param Skill the skill
         * @return array
         */
        public function findRevisionHistory(Skill $skill){
            $cyp = "MATCH (s:Skill {uuid:{uuid}})<-[r]-(u:User) 
                        RETURN r,u ORDER BY r.timestamp DESC";
            $query = new Query($this->client, $cyp, array("uuid" => $skill->getUuid()));
            $resultSet = $query->getResultSet();

            $revisions = array();
            foreach($resultSet as $row){
                $revision = array();
                $revision['date'] = $row['r']->getProperty('timestamp');
                if ($row['r']->getProperty('fromName')){
                    $revision['previousName'] = $row['r']->getProperty('fromName');
                }
                $revision['username'] = $row['u']->getProperty('username');
                $revisions[] = $revision;
            }

            return $revisions;
        }

        /**
         * WARNING: should not be trusted
         * Return a Skill object based on his id, false on failure
         * @param int $id
         * @return mixed 
         */
        public function findById($id){
            $node = $this->client->getNode($id);
            if ($node){
                $skill = new Skill( $node );
                return $skill;
            }

            return false;
        }


        /**
         * Return a Skill object based on his uuid, false on failure
         * @param string $id
         * @return mixed 
         */
        public function findByUuid($uuid){
            $cyp = "MATCH (skill:Skill { uuid: {uuid} }) RETURN skill LIMIT 1";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            if ($resultSet->count() == 1){
                $skill = new Skill();
                $skill->setNode($resultSet[0]['skill']);
                $skill->hydrateFromNode();
                return $skill;
            }

            return false;
        }

        /**
         * Return all parents up to the root, and all parent's siblings, false on failure
         * @param string Uuid
         * @return mixed 
         */
        public function findNodePathToRoot($uuid){

            $cyp = "MATCH (child:Skill)<-[:HAS*0..1]-(parents:Skill)-[:HAS*]->(s:Skill) 
                        WHERE s.uuid = {uuid}
                        RETURN parents,s,child ORDER BY parents.depth ASC, child.created ASC";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();

            if ($resultSet->count() >= 1){
                $path = array();
                $parentsAdded = array();
                $childrenAdded = array();

                
                foreach($resultSet as $row){
                    $parentUuid = $row['parents']->getProperty("uuid");

                    //first, create first level arrays
                    if (!in_array($parentUuid, $parentsAdded)){
                        $level = array(
                            "uuid" => $parentUuid,
                            "children" => array()
                        );

                        $path[] = $level;
                        $parentsAdded[] = $parentUuid;
                    }

                    //then add children to right level array
                    $childUuid = $row['child']->getProperty("uuid");

                    //do not add himself to array
                    if ($parentUuid == $childUuid){ continue; }

                    if (!in_array($childUuid, $childrenAdded)){
                        for($i=0;$i<count($path);$i++){
                            if ($path[$i]['uuid'] == $parentUuid){
                                $skill = new Skill($row['child']);
                                $path[$i]['children'][] = $skill->getJsonData();
                                if ($skill->getUuid() == $uuid){
                                    $path[$i]['selectedSkill'] = $childUuid;
                                }
                                $childrenAdded[] = $childUuid;
                            }
                        }
                    }
                }
                return $path;
            }

            return false;
        }

        /**
         * Return a Skill object based on his slug, false on failure
         * @param string $id
         * @return mixed 
         */
        public function findBySlug($slug){

            $uuid = $this->getUuidFromSlug($slug);

            $cyp = "MATCH (skill:Skill { uuid: {uuid} }) RETURN skill LIMIT 1";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            if ($resultSet->count() == 1){
                $skill = new Skill();
                $skill->setNode($resultSet[0]['skill']);
                $skill->hydrateFromNode();
                return $skill;
            }

            return false;
        }

        /**
         * Return parent uuid of a Node
         * @param Node $node
         * @return mixed Skill parent if found, else false
         */
        public function findParent(Skill $skill){
            $cyp = 'MATCH (parent:Skill)-[:HAS]->(child:Skill {uuid: {uuid}}) 
                    RETURN parent LIMIT 1';
            $query = new Query($this->client, $cyp, array("uuid" => $skill->getUuid()));
            $resultSet = $query->getResultSet();
            
            if ($resultSet->count() == 1){
                $node = $resultSet[0]['parent'];
                $parent = new Skill( $node );
                return $parent;
            }
            return false;
        }



        /**
         * Find parent and gp at the same time
         * @return ResultSet
         */
        public function findParentAndGrandParent($uuid){
            //fetch grand pa at same time to get to parent's parent id
            $cyp = "MATCH (parents:Skill)-[:HAS*1..2]->(child:Skill) 
                    WHERE child.uuid = {uuid}
                    RETURN parents
                    ORDER BY parents.created ASC";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            return $resultSet;
        }

        /**
         * do a regexp search based on url encoded keywords
         * @return array The search results
         */
        public function search($keywords){

            $local_string = "s.name";
            //if we are not browsing in english, search in current lang
            if ($GLOBALS['lang'] != \Config\Config::DEFAULT_LOCALE){
                $local_string = "s.l_".$GLOBALS['lang'];
            }

            $cyp = "MATCH (gp:Skill)-[:HAS*0..1]->(p:Skill)-[:HAS]->(s:Skill)
                    WHERE $local_string =~ {keywords} 
                    RETURN s,gp,p LIMIT 10";
            
            $keywords = trim(urldecode($keywords));
            $eachWords = explode(" ", addslashes($keywords));
            $regexp = "(?i).*";
            foreach($eachWords as $word){
                $regexp .= $word . ".*";
            }

            $query = new Query($this->client, $cyp, array("keywords" => $regexp));
            $matches = $query->getResultSet();
            return $matches;
        }


        private function createSearchIndex(){
            $this->searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $this->searchIndex->save();
        }


        private function addToSearchIndex($skill){
            $this->searchIndex->add($skill->getNode(), 'name', strtolower($skill->getName()));
        }


        /**
         * Save a NEW Skill to DB
         * @param Skill Skill to create
         * @param string The uuid of his parent
         * @param string The uuid of the current user
         * @return bool Return true on success
         */
        public function save(Skill $skill, $skillParentUuid, $userUuid){

            $cyp = "MATCH 
                    (parent:Skill {uuid: {parentUuid}}), 
                    (user:User {uuid: {userUuid}})
                    CREATE (parent)
                    -[:HAS {
                        since: {now}
                    }]->
                    (skill:Skill {
                        uuid: {skillUuid},
                        name: {name},
                        slug: {slug},
                        depth: {depth},
                        created: {now},
                        modified: {now} 
                        **trans**
                    })<-[:CREATED {
                        timestamp: {now}
                    }]-(user)";

            
            $namedParams = array(
                    "now" => time(),
                    "skillUuid" => $skill->getUuid(),
                    "name" => $skill->getName(),
                    "slug" => $skill->getSlug(),
                    "depth" => $skill->getDepth(),
                    "userUuid" => $userUuid,
                    "parentUuid" => $skillParentUuid
                );

            //dynamic shit for translations
            $transString = "";
            foreach($skill->getTranslations() as $code => $name){
                if ($code == "en"){continue;} //do not save english trans
                $transString .= ", l_".$code.": {l_".$code."_name}";
                $namedParams["l_".$code."_name"] = $name;
            }
            $cyp = str_replace("**trans**", $transString, $cyp);

            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();

            return true;
        }



        /**
         * Update an existing skill
         */
        public function update(Skill $skill, $userUuid, $previousName = ""){

            //first regenerate the slug if name changed
            //we can do that since only the uuid part of the slug is used to retrieve from slug
            $skill->regenerateSlug();

            $cyp = "MATCH (skill:Skill {uuid:{skillUuid}}), (user:User {uuid: {userUuid}})
                    SET skill.name = {name},
                        skill.slug = {slug},
                        skill.depth = {depth},
                        skill.modified = {now}
                        **trans**
                    CREATE (skill)<-[:MODIFIED {
                        timestamp: {now}, fromName: {fromName}
                    }]-(user)";

            $namedParams = array(
                    "now" => time(),
                    "skillUuid" => $skill->getUuid(),
                    "name" => $skill->getName(),
                    "slug" => $skill->getSlug(),
                    "depth" => $skill->getDepth(),
                    "userUuid" => $userUuid,
                    "fromName" => $previousName
                );

            //dynamic shit for translations
            $transString = "";
            foreach($skill->getTranslations() as $code => $name){
                if ($code == "en"){continue;} //do not save english trans
                $transString .= ", skill.l_".$code." = {l_".$code."_name}";
                $namedParams["l_".$code."_name"] = $name;
            }
            $cyp = str_replace("**trans**", $transString, $cyp);

/*
            echo $cyp;
            echo "\r\n";
            print_r($namedParams);
            die();
*/
            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();

            return true;
        }


        /**
         * Creates a new Parent-child relations
         * @param Skill the parent
         * @param Skill the child
         */
        public function saveParentChildRelationship(Skill $parent, Skill $child){
            $rel = $this->client->makeRelationship();
            $rel->setStartNode($parent->getNode())
                ->setEndNode($child->getNode())
                ->setType('HAS')->save();
            return true;
        }


        /**
         * Move a skill to a new parent
         * @param string Skill uuid to move
         * @param string Skill new parent uuid
         * @param string User uuid
         * @return bool true on success, false otherwise
         */
        public function move($skillUuid, $newParentUuid, $userUuid){
            $cyp = "MATCH 
                    (oldParent:Skill)-[r:HAS]->(skill:Skill {uuid: {skillUuid}}),
                    (newParent:Skill {uuid: {newParentUuid}}),
                    (user:User {uuid: {userUuid}})
                    CREATE 
                    (newParent)-[newR:HAS {since: {timestamp}}]->
                    (skill)
                    <-[:MOVED {timestamp: {timestamp}, fromParent: oldParent.uuid, toParent: {newParentUuid}}]
                    -(user)
                    DELETE r
                    RETURN newParent,oldParent,skill,newR";
            $query = new Query($this->client, $cyp, array(
                    "skillUuid" => $skillUuid, 
                    "newParentUuid" => $newParentUuid,
                    "timestamp" => time(),
                    "userUuid" => $userUuid
                )
            );
            $resultSet = $query->getResultSet();

            return $resultSet;
        }

        /**
         * Duplicate a skill to a new parent
         * @param string Skill uuid to move
         * @param string Skill new parent uuid
         * @param string User uuid
         * @return bool true on success, false otherwise
         */
        public function copy($skillUuid, $newParentUuid, $userUuid){

            $firstSkill = $this->findByUuid($skillUuid);

            $cyp = "MATCH 
                    (p:Skill {uuid: {skillUuid}})-[:HAS*1..4]->(s:Skill)<-[:HAS]-(directParent:Skill) 
                    RETURN s, directParent.uuid AS parentUuid
                    ORDER BY s.depth ASC
                    ";
            $query = new Query($this->client, $cyp, array(
                    "skillUuid" => $skillUuid
                )
            );
            $resultSet = $query->getResultSet();

        }



        /**
         * Delete a node by uuid, and its relations
         * @return mixed True on deletion, error message otherwise
         */
        public function delete($uuid){

            $nodeExists = $this->findByUuid($uuid);
            if ($nodeExists){
                $childrenNumber = $this->countChildren($uuid);
                if($childrenNumber == 0){

                    //change the label from :Skill to :DeletedSkill
                    $cyp = "MATCH (parent:Skill)-[:HAS]->(s:Skill)-[r]-() WHERE s.uuid = {uuid} 
                            SET s.previousParentUuid = parent.uuid 
                            REMOVE s:Skill SET s :DeletedSkill";
                    $query = new Query($this->client, $cyp, array(
                        "uuid" => $uuid)
                    );
                    $resultSet = $query->getResultSet();
                    return true;
                }
                else {
                    return _("This skill has children.");
                }
            }
            else {
                return _("This skill doesn't exists.");
            }
            return false;

        }


        /**
         * Update all depths (very slow but safe)
         */
        public function updateAllDepths(){
            $cyp = "MATCH (c:Skill)<-[r:HAS*]-(parent:Skill)
                    WITH c, count(r) AS parentsFound
                    SET c.depth = parentsFound";
            $query = new Query($this->client, $cyp);
            $query->getResultSet();
        }


        /**
         * Update all depths (very slow but safe)
         */
        public function updateAllDepths2(){
            $cyp = "MATCH p=(c:Skill)<-[:HAS*]-(:Skill)
                    SET c.depth = length(p)";
            $query = new Query($this->client, $cyp);
            $query->getResultSet();
        }

        /**
         * Update skill and all children's depth in db (not reliable)
         */
        public function updateDepthOnSkillAndChildren($skill){
            $cyp = "MATCH (parent)-[:HAS*]->(c:Skill) 
                    WHERE parent.uuid = {uuid}
                    SET c.depth = c.depth+1,parent.depth = parent.depth+1
                    RETURN c";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $skill->getUuid())
            );
            $resultSet = $query->getResultSet();
        }


        /**
         * Update skill depth in db (usefull after a move, but not reliable)
         */
        public function updateDepth($skill){
            $skillNode = $skill->getNode();
            $newDepth = $this->countParents( $skill->getUuid() ) + 1;
            if ($newDepth == $skill->getDepth()){
                return $newDepth;
            }
            $skillNode->setProperty("depth", $newDepth);
            $skillNode->save();
        }

        /**
         * Count number of children of a skill
         * @param string uuid of the node
         * @return int Number of children
         * 
         */
        public function countParents($uuid){
            $cyp = "MATCH (s:Skill {uuid: {uuid}})<-[r:HAS*]-(:Skill) RETURN count(r) as parentsNumber";
            $query = new Query($this->client, $cyp, array("uuid" => $uuid));
            $resultSet = $query->getResultSet();
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                return $row['parentsNumber'];
            }
        }

        /**
         * Count number of children of a skill
         * @param string uuid of the node
         * @return int Number of children
         * 
         */
        public function countChildren($uuid){
            $cyp = "MATCH (n:Skill)-[:HAS]->(:Skill) 
                        WHERE n.uuid = {uuid} 
                        RETURN count(*) as childrenNumber";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                return $row['childrenNumber'];
            }
        }



        /**
         * Find last actions of a user
         */
        public function getLatestActivity(User $user){
            $cyp = "MATCH (s:Skill)<-[r:CREATED|MODIFIED]-
                    (u:User {uuid: {userUuid}}) 
                    RETURN r, s
                    ORDER BY r.timestamp DESC LIMIT 20";

            $query = new Query($this->client, $cyp, array("userUuid" => $user->getUuid()));
            $resultSet = $query->getResultSet();

            $activities = array();
            if ($resultSet->count() > 0){
                foreach($resultSet as $row){
                    $act = array();
                    $act['skillName'] = $row['s']->getProperty('name');
                    //$act['action'] = $row['r']->getLabel();
                    $act['timestamp'] = $row['r']->getProperty('timestamp');
                    $activities[] = $act;
                }
            }

            return $activities;

        }

        /**
         * Return the uuid part from the slug
         */
        public function getUuidFromSlug($slug){
            $parts = explode("-", $slug);
            $uuid = end($parts);
            $validator = new Validator();
            if ($validator->isValidUuid($uuid)){
                return $uuid;
            }
            return false;
        }

    }
