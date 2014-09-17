<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;
    use \Cocur\Slugify\Slugify;

    class SkillManager extends Manager {

        private $searchIndex;

        public function __construct(){
            parent::__construct();
            $this->createSearchIndex();
        }


        private function createSearchIndex(){
            $this->searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $this->searchIndex->save();
        }


        private function addToSearchIndex($skill){
            $this->searchIndex->add($skill->getNode(), 'name', strtolower($skill->getName()));
        }


        /**
         * Save a Skill to DB
         * @param Skill Skill to save
         * @param string The uuid of his parent
         * @return Skill Returns the skill
         */
        public function save(Skill $skill, $skillParentUuid = null){

            //if new, set slug
            if (empty($skill->getSlug())){
                $slugify = new Slugify();
                $slug = $slugify->slugify($skill->getName()) . "-" . substr($skill->getUuid(), 0, 14);
                $skill->setSlug($slug);
            }

            $skillNode = $skill->getNode();
            $skillNode->save();

            //add skill label
            $label = $this->client->makeLabel('Skill');
            $skillNode->addLabels(array($label));
            $skill->setNode($skillNode);
            $skill->hydrateFromNode();

            //save parent child relationship
            if ($skillParentUuid){
                $parent = $this->findByUuid($skillParentUuid);
                $this->saveParentChildRelationship($parent, $skill);
            }

            //add to search index
            $this->addToSearchIndex($skill);
            return $skill;
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
         * @return bool true on success, false otherwise
         */
        public function move($skillUuid, $newParentUuid){
            $cyp = "MATCH 
                    (oldParent:Skill)-[r:HAS]->(skill:Skill {uuid: {skillUuid}}),
                    (newParent:Skill {uuid: {newParentUuid}}) 
                    CREATE 
                    (newParent)-[newR:HAS {since: timestamp()}]->(skill),
                    (oldParent)-[historyR:HAD {since: timestamp()}]->(skill) 
                    DELETE r
                    RETURN newParent,oldParent,skill,newR";
            $query = new Query($this->client, $cyp, array(
                "skillUuid" => $skillUuid, "newParentUuid" => $newParentUuid)
            );
            $resultSet = $query->getResultSet();

            return $resultSet;
        }

        /**
         * Duplicate a skill to a new parent
         * @param string Skill uuid to move
         * @param string Skill new parent uuid
         * @return bool true on success, false otherwise
         */
        public function copy($skillUuid, $newParentUuid){
            
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
                    $cypher = "MATCH (n)-[r]-() WHERE n.uuid = {uuid} DELETE n, r";
                    $query = new Query($this->client, $cypher, array(
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
         * Update skill depth in db (usefull after a move) 
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
            $cypher = "MATCH (n:Skill)-[:HAS]->(:Skill) 
                        WHERE n.uuid = {uuid} 
                        RETURN count(*) as childrenNumber";
            $query = new Query($this->client, $cypher, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                return $row['childrenNumber'];
            }
        }

        /**
         * Update an existing skill
         */
        public function update(Skill $skill){
            $node = $skill->getNode();
            if ($node->save()){
                return true;
            }
            return false;
        }

        /**
         * Retrieve all nodes at a specified depth
         * @param int depth
         * @return array
         */
        public function findAtDepth($depth){
            $cypher = "MATCH (s:Skill)
                        WHERE s.depth = {depth}
                        RETURN s";
            $query = new Query($this->client, $cypher, array("depth" => $depth));
            $resultSet = $query->getResultSet();

            return $resultSet;
        }

        /**
         * Retrieve all modifications on a skill
         * @param Skill the skill
         * @return array
         */
        public function findRevisionHistory(Skill $skill){
            $cypher = "MATCH (s:Skill {id:{skillId}})<-[m:MODIFIED]-(u:User) 
                        RETURN m,u ORDER BY m.date DESC";
            $query = new Query($this->client, $cypher, array("skillId" => $skill->getId()));
            $resultSet = $query->getResultSet();

            $revisions = array();
            foreach($resultSet as $row){
                $revision = array();
                $revision['date'] = $row['m']->getProperty('date');
                $revision['previousName'] = $row['m']->getProperty('previousName');
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
            $cypher = "MATCH (skill:Skill { uuid: {uuid} }) RETURN skill LIMIT 1";
            $query = new Query($this->client, $cypher, array(
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
         * @param string Slug
         * @return mixed 
         */
        public function findNodePathToRoot($slug){

            $cypher = "MATCH (child:Skill)<-[:HAS*0..1]-(parents:Skill)-[:HAS*]->(s:Skill) 
                        WHERE s.slug = {slug}
                        RETURN parents,s,child";
            $query = new Query($this->client, $cypher, array(
                "slug" => $slug)
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
                                if ($skill->getSlug() == $slug){
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
            $cypher = "MATCH (skill:Skill { slug: {slug} }) RETURN skill LIMIT 1";
            $query = new Query($this->client, $cypher, array(
                "slug" => $slug)
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
            $cypher = 'MATCH (parent:Skill)-[:HAS]->(child:Skill {uuid: {uuid}}) RETURN parent LIMIT 1';
            $query = new Query($this->client, $cypher, array("uuid" => $skill->getUuid()));
            $resultSet = $query->getResultSet();
            
            if ($resultSet->count() == 1){
                $node = $resultSet[0]['parent'];
                $parent = new Skill( $node );
                return $parent;
            }
            return false;
        }

        /**
         * Find and return the top skill node
         * @return mixed
         */
        public function findRootNode(){
            $cypher = 'MATCH (n {name: "Skills"}) RETURN n LIMIT 1';
            $query = new Query($this->client, $cypher);
            $resultSet = $query->getResultSet();
            
            if ($resultSet->count() == 1){
                $rootNode = $resultSet[0]['n'];
                $skill = new Skill( $rootNode );
                return $skill;
            }
            return false;
        }

        public function findAll(){

            $rootNode = $this->findRootNode();
            if (!$rootNode){return false;}

            $traversal = new Traversal($this->client);
            $traversal->addRelationship('HAS', Relationship::DirectionOut)
                ->setPruneEvaluator(Traversal::PruneNone)
                ->setReturnFilter(Traversal::ReturnAll)
                ->setMaxDepth(20);

            $allNodes = $traversal->getResults($rootNode->getNode(), Traversal::ReturnTypeNode);
            return $allNodes;
        }

        /**
         * Find parent and gp at the same time
         * @return ResultSet
         */
        public function findParentAndGrandParent($uuid){
            //fetch grand pa at same time to get to parent's parent id
            $cypher = "MATCH (parents:Skill)-[:HAS*1..2]->(child:Skill) 
                        WHERE child.uuid = {uuid}
                        RETURN parents";
            $query = new Query($this->client, $cypher, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            return $resultSet;
        }

        /**
         * Find skill children
         */
        public function findChildren($uuid){
            $cypher = "MATCH (parent)-[:HAS]->(c:Skill) 
                        WHERE parent.uuid = {uuid}
                        RETURN c LIMIT 100";
            $query = new Query($this->client, $cypher, array(
                "uuid" => $uuid)
            );
            $resultSet = $query->getResultSet();
            return $resultSet;
        }
    }
