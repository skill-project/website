<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    class SkillManager {

        private $client;
        private $searchIndex;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
            $this->createSearchIndex();
        }


        private function createSearchIndex(){
            $this->searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $this->searchIndex->save();
        }


        private function addToSearchIndex($skill){
            $this->searchIndex->add($skill->getNode(), 'name', strtolower($skill->getName()));
        }



        public function save(Skill $skill){
            $skillNode = $skill->getNode();

            $skillNode->save();

            //add skill label
            $label = $this->client->makeLabel('Skill');
            $skillNode->addLabels(array($label));
            $skill->setNode($skillNode);
            $skill->hydrateFromNode();

            //save parent child relationship
            if (!empty($skill->getParentId()) || $skill->getParentId() === 0){
                $parent = $this->findById($skill->getParentId());
                $this->saveParentChildRelationship($parent, $skill);
            }

            //add to search index
            $this->addToSearchIndex($skill);
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
         * Delete a node by id, and its relations
         * @return mixed True on deletion, error message otherwise
         */
        public function delete($id){

            $nodeExists = $this->findById($id);
            if ($nodeExists){
                $childrenNumber = $this->countChildren($id);
                if($childrenNumber == 0){
                    $cypher = "MATCH (n)-[r]-() WHERE id(n) = {nodeId} DELETE n, r";
                    $query = new Query($this->client, $cypher, array(
                        "nodeId" => (int)$id)
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
         * Count number of children of a node
         * @param int Id of the node
         * @return int Number of children
         * 
         */
        public function countChildren($id){
            $cypher = "MATCH (n:Skill)-[:HAS]->(:Skill) 
                        WHERE id(n) = {nodeId} 
                        RETURN count(*) as childrenNumber";
            $query = new Query($this->client, $cypher, array(
                "nodeId" => (int)$id)
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
         * Return a Skill object based on his id, false on failure
         * @param int $id
         * @return mixed 
         */
        public function findById($id){
            $node = $this->client->getNode($id);
            if ($node){
                $skill = new Skill( $node );
                $skill->setParentId( $this->findNodeParentId($node) );
                return $skill;
            }

            return false;
        }

        /**
         * Return parent id of a Node
         * @param Node $node
         * @return int parentid
         */
        public function findNodeParentId(Node $node){
            $nodeParentRelationship = $node->getRelationships(
                array('HAS'), Relationship::DirectionIn
            );

            $parentId = false;
            if (count($nodeParentRelationship) == 1){
                $parentId = $nodeParentRelationship[0]->getStartNode()->getId();
            }
            return $parentId;
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
        public function findParentAndGrandParent($nodeId){
            //fetch grand pa at same time to get to parent's parent id
            $cypher = "START child=node({childId})
                        MATCH (parents)-[:HAS*1..2]->(child) 
                        RETURN parents";
            $query = new Query($this->client, $cypher, array(
                "childId" => (int)$nodeId)
            );
            $resultSet = $query->getResultSet();
            return $resultSet;
        }

        /**
         * Find skill children
         */
        public function findChildren($nodeId){
            $cypher = "START parent=node({parentId}) 
                        MATCH (parent)-[:HAS]->(c:Skill) RETURN c LIMIT 100";
            $query = new Query($this->client, $cypher, array(
                "parentId" => (int) $nodeId)
            );
            $resultSet = $query->getResultSet();
            return $resultSet;
        }
    }
