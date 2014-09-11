<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\Skill;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    class ApiController extends Controller {
        
        /**
         * get the root "Skills" node
         */
        public function getRootNodeAction(){

            $skillManager = new SkillManager();
            $rootNode = $skillManager->findRootNode();
            
            $nodeJson = new \Model\JsonNode($rootNode->getId(), 
                    $rootNode->getProperty('name'));

            $json = new \Model\JsonResponse();
            $json->setData($nodeJson->getArray());
            $json->send();
        }

        /**
         * Returns node parent
         * 
         * @param int $id
         */
        public function getNodeParentAction($id){
            //fetch grand pa at same time to get to parent's parent id
            $cypher = "START child=node({childId})
                        MATCH (parents)-[:HAS*1..2]->(child) 
                        RETURN parents";
            $query = new Query($this->client, $cypher, array(
                "childId" => (int)$id)
            );
            $resultSet = $query->getResultSet();
            
            $ancestorsFound = $resultSet->count();
            if ($ancestorsFound == 0){
                $json = new \Model\JsonResponse("error", "No parent found");
                $json->send();
            }
            else if ($ancestorsFound >= 1){
                $parentNode = $resultSet[0]['parent'];
                $granPaId = ($ancestorsFound == 2) ? $resultSet[1]['parent']->getId() : null;
                $nodeJson = new \Model\JsonNode($parentNode->getId(), 
                    $parentNode->getProperty('name'), $granPaId);
            }

            $json = new \Model\JsonResponse();
            $json->setData($nodeJson->getArray());
            $json->send();
        }

        /**
         * get first level children of a node, by its id
         */
        public function getNodeChildrenAction($id){
            $cypher = "START parent=node({parentId}) MATCH (parent)-[:HAS]->(c) RETURN c LIMIT 100";
            $query = new Query($this->client, $cypher, array(
                "parentId" => (int)$id)
            );
            $resultSet = $query->getResultSet();
            $data = array();
            foreach ($resultSet as $row) {
                $nodeJson = new \Model\JsonNode($row['c']->getId(), 
                    $row['c']->getProperty('name'), $id);
                $data[] = $nodeJson->getArray();
            }

            $json = new \Model\JsonResponse();
            $json->setData($data);
            $json->send();
        }

        /**
         * get one node by id
         */
        public function getNodeAction($id){
            $node = $this->client->getNode($id);
            $nodeParentRelationship = $node->getRelationships(
                array('HAS'), Relationship::DirectionIn
            );

            $parentId = null;
            if (count($nodeParentRelationship) == 1){
                $parentId = $nodeParentRelationship[0]->getStartNode()->getId();
            }

            $nodeJson = new \Model\JsonNode($node->getId(), $node->getProperty('name'), $parentId);

            $json = new \Model\JsonResponse();
            $json->setData($nodeJson->getArray());
            $json->send();
        }

        /**
         * Deletes a node
         * 
         * @param int $id
         */
        function deleteNodeAction($id){
            $node = $this->client->getNode($id);
            if (is_object($node)){
                $node->delete();
            }
            $json = new \Model\JsonResponse(null, "Node deleted.");
            $json->send();
        }


        private function createSearchIndex(){
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            if ($searchIndex->save()){
                echo "index created";
            }
        }

        private function addToSearchIndex($skill){
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->add($skill, 'name', strtolower($skill->getProperty('name')));
        }


        /**
         * Search by keywords
         */
        public function searchNodeAction($keywords){
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $matches = $searchIndex->query('name:*'.strtolower($keywords).'*~');
            foreach ($matches as $node) {
                $nodeParentRelationship = $node->getRelationships(
                    array('HAS'), Relationship::DirectionIn
                );

                $parentId = null;
                if (count($nodeParentRelationship) == 1){
                    $parentId = $nodeParentRelationship[0]->getStartNode()->getId();
                }
                $nodeJson = new \Model\JsonNode($node->getId(), 
                    $node->getProperty('name'), $parentId);
                $data[] = $nodeJson->getArray();
            }

            $json = new \Model\JsonResponse();
            $json->setData($data);
            $json->send();
        }

        /**
         * delete all data then load dummy data
         */
        public function dummyDataAction(){

            $maxChildrenPerNode = 30;
            $maxCharactersInSkillName = 40;

            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //delete all
            $query = new Query($this->client, "MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            //init search index
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->save();

            //add skill label
            $label = $this->client->makeLabel('Skill');

            //lorem ipsum generator
            $faker = \Faker\Factory::create();

            //create root node
            $rootNode = $this->client->makeNode()
                            ->setProperty("name", "Skills")
                            ->save();
//              $rootNode->setId(1)->save();
            $rootNode->addLabels(array($label));
            
            $this->addToSearchIndex($rootNode);

            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences", "Technicals");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_tie", 30);

                $topChildNode = $this->client->makeNode()->setProperty('name', $topChild)->save();
                $rel = $this->client->makeRelationship();
                $rel->setStartNode($rootNode)
                    ->setEndNode($topChildNode)
                    ->setType('HAS')->save();
                $this->addToSearchIndex($topChildNode);

                //random number of children for this top node
                $numChildren = $faker->numberBetween(2,$maxChildrenPerNode);

                //add them
                for($i=0;$i<$numChildren;$i++){
                    $skillName = $faker->text($faker->numberBetween(5,$maxCharactersInSkillName));
                    $n = $this->client->makeNode()->setProperty('name', $skillName)->save();
                    $rel = $this->client->makeRelationship();
                    $rel->setStartNode($topChildNode)
                        ->setEndNode($n)
                        ->setType('HAS')->save();
                    $this->addToSearchIndex($n);
                }
            }

        }



        public function addSkillAction(){
            if (!empty($_POST)){

                $skillName = $_POST['skillName'];
                $skillParentId = $_POST['skillParentId'];

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillParentId($skillParentId);

                if ($validator->isValid()){
                    $skill = new Skill();
                    $skill->setName($skillName);
                    $skill->setParentId($skillParentId);

                    $skillManager = new SkillManager();
                    $skillManager->save($skill);

                    //add parent child relationship
                    $parentNode = $this->client->getNode($skillParentId);
                    $rel = $this->client->makeRelationship();
                    $rel->setStartNode($parentNode)
                        ->setEndNode($skill->getNode())
                        ->setType('HAS')->save();

                    //add creator skill relationship
                    $userNode = $this->client->getNode($_SESSION['user']['id']);
                    $rel = $this->client->makeRelationship();
                    $rel->setStartNode($userNode)
                        ->setEndNode($skill->getNode())
                        ->setType('CREATED')->save();
                }
                else {
                    print_r($validator->getErrors());   
                }
            }
        }


   
        /**
         * delete all data then load dummy data
         */
         /*
            //VERSION EN CYPHER...
         public function dummyDataAction(){

            $maxChildrenPerNode = 30;
            $maxCharactersInSkillName = 50;

            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //init search index
            $this->createSearchIndex();

            //bis
            //$query = new Query($this->client, "CREATE INDEX ON :Skill(name)");
            //$resultSet = $query->getResultSet();
            
            //lorem ipsum generator
            $faker = \Faker\Factory::create();
            
            //begin transaction
            $transaction = $this->client->beginTransaction();

            //delete all
            $query = new Query($this->client, "MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            //create root node
            $query = new Query($this->client, 
                    'CREATE (n{name:"Skills"});');
            $result = $transaction->addStatements($query);

            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_tie", 30);

                //create top child node
                $query = new Query($this->client, 
                        'MATCH (n {name:"Skills"}) CREATE (n)-[r:HAS]->(:skill {name: {topChild}});',
                        array("topChild" => $topChild));
                $result = $transaction->addStatements($query);

                //random number of children for this top node
                $numChildren = $faker->numberBetween(2,$maxChildrenPerNode);

                //add them
                for($i=0;$i<$numChildren;$i++){
                    $skillName = $faker->text($faker->numberBetween(5,$maxCharactersInSkillName));
                    $query = new Query($this->client, 
                        'MATCH (n {name:{parentName}}) CREATE (n)-[r:HAS]->(:skill {name: {skillName}});',
                        array(
                            "parentName" => $topChild,
                            "skillName" => $skillName)
                        );
                    $result = $transaction->addStatements($query);
                }
            }

            //go
            $transaction->commit();

        }
        */

    }