<?php

namespace App\Model;

use App\Model\BaseModel;
use Illuminate\Database\Eloquent\Model;
use \Everyman\Neo4j\Node;
use \Everyman\Neo4j\Traversal;
use \Everyman\Neo4j\Relationship;
use \Everyman\Neo4j\Cypher\Query;
use Carbon\Carbon;
use App\Model\Skill;


class SkillManager
{
    private $searchIndex;

    public function __construct(){
//        parent::__construct();
        $this->client = DatabaseFactory::getClient();
        //$this->createSearchIndex();
    }

    public function findAllForDump(){

        $cyp = 'MATCH (parent:Skill)-[:HAS]->(skill:Skill)<-[r:AUTO_TRANSLATED|TRANSLATED]-()
                    RETURN skill, parent, r ORDER BY skill.depth ASC, skill.name ASC LIMIT 100000';
        $query = new Query($this->client, $cyp);
        $resultSet = $query->getResultSet();

        if ($resultSet->count() > 0){
            $csvData = array();
            foreach ($resultSet as $row) {
                $csvRow = [];
                $csvRow['uuid'] = $row['skill']->getProperty('uuid');

                $csvRow['name_en'] = $row['skill']->getProperty('name');
                $csvRow['name_fr'] = $row['skill']->getProperty('l_fr');
                //$csvRow['translated_to'] = $row['r']->getProperty('to'); //always fr ?
                $csvRow['auto_translated'] = ($row['r']->getType() == "AUTO_TRANSLATED") ? 1 : 0;
                $csvRow['translation_date'] = $row['r']->getProperty('timestamp');

                $csvRow['date_added'] = $row['skill']->getProperty('created');
                $csvRow['date_updated'] = $row['skill']->getProperty('modified');
                $csvRow['depth_level'] = $row['skill']->getProperty('depth');

                //do not add parent uuid for depth 1 nodes
                $csvRow['parent_uuid'] = ($csvRow['depth_level'] > 1) ? $row['parent']->getProperty('uuid') : "";

                //replace if exists in array
                $found = false;
                for($i=0, $count = count($csvData); $i<$count; $i++){
                    if ($csvData[$i]['uuid'] == $csvRow['uuid']){
                        $found = true;
                        $csvData[$i] = $csvRow;
                        break;
                    }
                }
                //else append
                if (!$found){
                    $csvData[] = $csvRow;
                }
            }
            return $csvData;
        }
        return false;
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
                        RETURN s
                        ORDER BY s.created ASC LIMIT 40";
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
    public function findByUuid($uuid, $findDeleted = false){
        $skillLabel = $findDeleted ? "DeletedSkill" : "Skill";

        $cyp = "MATCH (skill:$skillLabel { uuid: {uuid} }) RETURN skill LIMIT 1";
        $query = new Query($this->client, $cyp, array("uuid"=> $uuid));
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
     * Return the Skill object of a deleted skill based on his uuid, false on failure
     * @param string $id
     * @return mixed
     */
    public function findDeletedByUuid($uuid){
        return $this->findByUuid($uuid, true);
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
     * Find the creator uuid of a skill
     */
    public function findCreationInfo($skillUuid){
        //fetch grand pa at same time to get to parent's parent id
        $cyp = "MATCH (s:Skill {uuid:{skillUuid}})<-[r:CREATED]-(u:User)
                    RETURN u.uuid AS creatorUuid, r.timestamp AS timestamp";
        $query = new Query($this->client, $cyp, array(
                "skillUuid" => $skillUuid)
        );
        $resultSet = $query->getResultSet();
        foreach($resultSet as $row){
            $resp = array(
                "creatorUuid" => $row['creatorUuid'],
                "timestamp" => $row['timestamp']
            );
            return $resp;
        }
        return false;
    }

    /**
     * do a regexp search based on url encoded keywords
     * @return array The search results
     */
    public function search($keywords){

        $local_string = "s.name";
        //if we are not browsing in english, search in current lang
        if (env('lang') != 'en'){
            $local_string = "s.l_".env('lang');
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
     * Returns the parent and grand parent of a given skill by its uuid
     */
    public function getContext($uuid, $formatted = true) {
        $cyp = "MATCH (p:Skill)-[:HAS]->(s {uuid: {uuid}})
                    OPTIONAL MATCH (gp:Skill)-[:HAS]->(p)
                    WHERE s:Skill OR s:DeletedSkill
                    RETURN gp,p,s
                    LIMIT 1";

        $query = new Query($this->client, $cyp, array("uuid" => $uuid));

        $resultSet = $query->getResultSet();
        if ($resultSet->count() > 0){
            $row = $resultSet[0];

            if ($formatted) {
                if (!empty($row["gp"])) {
                    if ($row["gp"]->getProperty("depth") > 0) $beforeGp = "[...] > ";
                    else $beforeGp = "";

                    $gpSkill = new Skill($row["gp"]);

                    $gp = $beforeGp . $gpSkill->getLocalName() . " > ";
                }else {
                    $gp = "";
                }

                //--------------------------------------------------
                //WARNING !!!
                //Request new client to avoid strangest bug on earth
                //--------------------------------------------------
                DatabaseFactory::setNewClient();

                $parentSkill = new Skill($row["p"]);
                $parent = $parentSkill->getLocalName();

                $context = $gp . $parent;
            }
            return $context;
        }
        return false;
    }

    /**
     * Save a NEW Skill to DB
     * @param Skill Skill to create
     * @param string The uuid of his parent
     * @param string The uuid of the current user
     * @return bool Return true on success
     */
    public function saveSkill(Skill $skill, $skillParentUuid, $userUuid){
        //intentionally not saving caps, as they are not added at skill creation
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
                        childrenCount: 0,
                        created: {now},
                        modified: {now}
                        **trans**
                    })<-[:CREATED {
                        timestamp: {now},
                        originalName: {originalName}
                    }]-(user)";


        $namedParams = array(
            "now" => time(),
            "skillUuid" => $skill->getUuid(),
            "name" => $skill->getName(),
            "slug" => $skill->getSlug(),
            "depth" => $skill->getDepth(),
            "userUuid" => $userUuid,
            "parentUuid" => $skillParentUuid,
            "originalName" => $skill->getName()
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

        $this->updateChildrenCount($skillParentUuid);
        return true;
    }



    /**
     * Update an existing skill
     */
    public function updateSkill(Skill $skill, $userUuid, $previousName = ""){

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
                        timestamp: {now}, fromName: {fromName}, toName: {toName}
                    }]-(user)";

        $namedParams = array(
            "now" => time(),
            "skillUuid" => $skill->getUuid(),
            "name" => $skill->getName(),
            "slug" => $skill->getSlug(),
            "depth" => $skill->getDepth(),
            "userUuid" => $userUuid,
            "fromName" => $previousName,
            "toName" => $skill->getName()
        );

        //dynamic shit for translations
        $transString = "";
        foreach($skill->getTranslations() as $code => $name){
            if ($code == "en"){continue;} //do not save english trans
            $transString .= ", skill.l_".$code." = {l_".$code."_name}";
            $namedParams["l_".$code."_name"] = $name;
        }
        $cyp = str_replace("**trans**", $transString, $cyp);

        $query = new Query($this->client, $cyp, $namedParams);
        $resultSet = $query->getResultSet();

        return true;
    }


    /**
     * Update an existing skill children caps
     */
    public function updateCaps(Skill $skill, $userUuid){

        $cyp = "MATCH (skill:Skill {uuid:{skillUuid}}), (user:User {uuid: {userUuid}})
                    SET skill.capIdealMax= {capIdealMax},
                        skill.capAlert= {capAlert},
                        skill.capNoMore= {capNoMore},
                        skill.modified = {now}
                    CREATE (skill)<-[:MODIFIED {
                        timestamp: {now}
                    }]-(user)";

        $namedParams = array(
            "now" => time(),
            "skillUuid" => $skill->getUuid(),
            "capIdealMax" => $skill->getCapIdealMax(),
            "capAlert" => $skill->getCapAlert(),
            "capNoMore" => $skill->getCapNoMore(),
            "userUuid" => $userUuid
        );

        $query = new Query($this->client, $cyp, $namedParams);
        $resultSet = $query->getResultSet();

        return true;
    }


    /**
     * Creates a new Parent-child relations
     * @param Skill the parent
     * @param Skill the child
     * @return bool
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

        foreach($resultSet as $row){
            $oldParentUuid = $row['oldParent']->getProperty('uuid');
            break;
        }

        //update old and new parents children count
        $this->updateChildrenCount($oldParentUuid);
        $this->updateChildrenCount($newParentUuid);

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

        $this->updateChildrenCount($newParentUuid);

    }



    /**
     * Delete a node by uuid, and its relations
     * @return mixed True on deletion, error message otherwise
     */
    public function deleteSkill($skillUuid, $userUuid){

        $nodeExists = $this->findByUuid($skillUuid);
        if ($nodeExists){
            $childrenNumber = $this->countChildren($skillUuid);
            if($childrenNumber == 0){

                //change the label from :Skill to :DeletedSkill
                $cyp = "MATCH (parent:Skill)-[:HAS]->(s:Skill {uuid:{skillUuid}}), (u:User {uuid:{userUuid}})
                            SET s.previousParentUuid = parent.uuid
                            SET s :DeletedSkill
                            REMOVE s:Skill
                            CREATE (u)-[r:DELETED {timestamp:{now}}]->(s)
                            RETURN parent";
                $query = new Query($this->client, $cyp, array(
                        "skillUuid" => $skillUuid,
                        "userUuid" => $userUuid,
                        "now"=>time()
                    )
                );
                $resultSet = $query->getResultSet();
                $oldParentUuid = $resultSet[0]['parent']->getProperty("uuid");
                $this->updateChildrenCount($oldParentUuid);

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
     * Update all childrenCount
     * takes about one second to perform with 2000 skills
     */
    public function updateAllChildrenCounts(){
        $cyp = "MATCH (children:Skill)<-[r:HAS*0..1]-(s:Skill)
                    WITH s, count(children) AS childrenNum
                    SET s.childrenCount = childrenNum-1";
        $query = new Query($this->client, $cyp);
        $query->getResultSet();
    }


    /**
     * Update one skill's childrenCount
     */
    public function updateChildrenCount($uuid){
        $cyp = "MATCH (children:Skill)<-[r:HAS*0..1]-(s:Skill {uuid: {uuid}})
                    WITH s, count(children) AS childrenNum
                    SET s.childrenCount = childrenNum-1 ";
        $query = new Query($this->client, $cyp, array("uuid" => $uuid));
        $query->getResultSet();
        return $this->findByUuid($uuid);
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
        //not specifying node label cause it can be different from :Skill
        $cyp = "MATCH (s)<-[r:CREATED|MODIFIED|TRANSLATED|DELETED|MOVED]-
                    (u:User {uuid: {userUuid}})
                    RETURN r, s
                    ORDER BY r.timestamp DESC LIMIT 50";

        $query = new Query($this->client, $cyp, array("userUuid" => $user->getUuid()));
        $resultSet = $query->getResultSet();

        $activities = array();
        if ($resultSet->count() > 0){
            foreach($resultSet as $row){
                $act = array();
                $act['skillName'] = $row['s']->getProperty('name');
                $act['action'] = $row['r']->getType();
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
        $validator = new CustomValidator();
        if ($validator->isValidUuid($uuid)){
            return $uuid;
        }
        return false;
    }

    /**
     * Return the user who created the skill
     */
    public function getSkillOwner($uuid){
        $cyp = "MATCH
                        (user:User)-[:CREATED]->(skill {uuid: {uuid}})
                    WHERE skill:Skill OR skill:DeletedSkill
                    RETURN user";

        $namedParams = array(
            "uuid"  => $uuid
        );

        $query = new Query($this->client, $cyp, $namedParams);
        $resultSet = $query->getResultSet();

        if ($resultSet->count() == 1){
            $owner = new User();
            $owner->setNode($resultSet[0]['user']);
            $owner->hydrateFromNode();
            return $owner;
        }else return false;
    }

    /**
     * Return the skill history
     */
    public function getSkillHistory($uuid, $limit = 10, $skip = 0){

        $cyp = "MATCH (s:Skill {uuid: {uuid}})<-[r:CREATED|MODIFIED|TRANSLATED|AUTO_TRANSLATED|DELETED|MOVED|IS_ABOUT]-(u:User)
                    RETURN r,u
                    ORDER BY r.timestamp DESC SKIP {skip} LIMIT {limit}";

        $namedParams = array(
            "uuid"  => $uuid,
            "limit" => $limit,
            "skip"  => $skip
        );

        $query = new Query($this->client, $cyp, $namedParams);
        $resultSet = $query->getResultSet();
//        $activities = "";
        if ($resultSet->count() > 0){
            $languageCodes = new LanguageCode();

            foreach($resultSet as $row){
                $act = array();
                $act['action'] = $row['r']->getType();

                $interval = time() - $row['r']->getProperty('timestamp');
                $act['timestamp'] = $row['r']->getProperty('timestamp');

                $act['diffHuman'] = $languageCodes->localizeCarbon(Carbon::now()->subSeconds($interval)->diffForHumans(), env('lang'));
                $act['exactTime'] = strftime("%c", $row['r']->getProperty('timestamp'));

                $act['userProfileURL'] =  route('profile', ['username' => $row['u']->getProperty('username')]);
//                $act['userProfileURL'] =  \Controller\Router::url('viewProfile', array('username' => $row['u']->getProperty('username')), true);
                foreach($row['r']->getProperties() as $key => $value){
                    $act['relProps'][$key] = $value;
                }
                foreach($row['u']->getProperties() as $key => $value){
                    $act['userProps'][$key] = $value;
                }

                switch ($act['action']) {
                    case "CREATED":
                        $act['actionName'] = _("Created");
                        $act['actionDetails'] = "";
                        break;
                    case "AUTO_TRANSLATED":
                        $act['actionName'] = _("Automatically translated");
                        $act['actionDetails'] = sprintf(_("%s: \"%s\""), $languageCodes->getLocalName($act['relProps']['to']), $act['relProps']['name']);
                        break;
                    case "MOVED":
                        $act['actionName'] = _("Moved");

                        //Retrieving old parent of skill before move operation
                        $fromParent = $this->findByUuid($act['relProps']['fromParent']);
                        if (!$fromParent) $fromParentDeleted = $this->findDeletedByUuid($act['relProps']['fromParent']);
                        $fromParentName = $fromParent ? "<strong>" . $fromParent->getName() . "</strong>" : "<strike>" . $fromParentDeleted->getName() . "</strike> <em>(deleted)</em>";
                        //Old parent context
                        $fromParentContext = $this->getContext($act['relProps']['fromParent']);
                        if (!empty($fromParentContext)) $fromParentContext .= " > ";
                        $fromParentName = $fromParentContext . $fromParentName;

                        //Retrieving new parent of skill after move operation
                        $toParent = $this->findByUuid($act['relProps']['toParent']);
                        if (!$toParent) $toParentDeleted = $this->findDeletedByUuid($act['relProps']['toParent']);
                        $toParentName = $toParent ? "<strong>" . $toParent->getName() . "</strong>" : "<strike>" . $toParentDeleted->getName() . "</strike> <em>(deleted)</em>";
                        //New parent context
                        $toParentContext = $this->getContext($act['relProps']['toParent']);
                        if (!empty($toParentContext)) $toParentContext .= " > ";
                        $toParentName = $toParentContext . $toParentName;

                        $act["fromParentName"] = $fromParentName;
                        $act["toParentName"] = $toParentName;

                        // $act['actionDetails'] = sprintf(_("%s -> %s"), $fromParentName, $toParentName);
                        break;
                    case "MODIFIED": //Renamed really
                        $act['actionName'] = _("Renamed");

                        if (!empty($act['relProps']['fromName']) && !empty($act['relProps']['toName'])){
                            $act['actionDetails'] = sprintf("\"%s\" -> \"%s\"", $act['relProps']['fromName'], $act['relProps']['toName']);
                        }
                        else if (!empty($act['relProps']['fromName']) && empty($act['relProps']['toName'])){
                            $act['actionDetails'] = sprintf(_("Old name: \"%s\""), $act['relProps']['fromName']);
                        }

                        break;
                    case "TRANSLATED":
                        $act['actionName'] = _("Translated");
                        $act['actionDetails'] = sprintf(_("%s: \"%s\""), $languageCodes->getLocalName($act['relProps']['to']), $act['relProps']['name']);
                        break;
                    case "DELETED": //Probably useless, as this skill will never show in the tree
                        $act['actionName'] = _("Deleted");
                        $act['actionDetails'] = "";
                        break;
                    default:
                        $act['actionName'] = $act['action'];
                        $act['actionDetails'] = "";
                        break;
                }
                $activities = array();
//                array_push($activities,$act);
                $activities[] = $act;
            }

            $discussionManager = new DiscussionManager();
            $skillMessages = $discussionManager->getSkillMessages($uuid);

            foreach($skillMessages as $message) {
                $message["action"] = "COMMENT";
                $message["actionName"] = _("Discussed");
                $message["actionDetails"] = $message["message"];

                $message['userProfileURL'] = route('profile', ['username' => $row['u']->getProperty('username')]);

                $interval = time() - $message["timestamp"];
                $message['diffHuman'] = $languageCodes->localizeCarbon(Carbon::now()->subSeconds($interval)->diffForHumans(), env('lang'));
                $message['exactTime'] = strftime("%c", $row['r']->getProperty('timestamp'));

//                array_push($activities,$message);
                $activities[] = $message;
            }

            //Better sorting of discussions and CREATED/AUTO_TRANSLATED
            usort($activities, array($this, "sortActivities"));

            return $activities;
        }else return false;
    }

    public function sortActivities($a, $b) {
        //AUTO_TRANSLATED and CREATED always have the same timestamp
        //so ordering is forced : first CREATED, second AUTO_TRANSLATED (makes more sense)
        if ($a["timestamp"] == $b["timestamp"] &&
            ($a["action"] == "AUTO_TRANSLATED" && $b["action"] == "CREATED")) {
            return false;
        }else {
            //General case used to order discussions with other actions
            return $a["timestamp"] <= $b["timestamp"];
        }
    }
}
