<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\Skill;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    class ApiController extends Controller {
        
        /**
         * Test shit
         */
        public function testAction($id){
            $skillManager = new SkillManager();
            $skill = $skillManager->findById($id);
            print_r($skill);
        }

        /**
         * get the root "Skills" node
         */
        public function getRootNodeAction(){

            $skillManager = new SkillManager();
            $skill = $skillManager->findRootNode();
            
            $json = new \Model\JsonResponse();
            $json->setData($skill->getJsonData());
            $json->send();

        }

        /**
         * Returns node parent
         * 
         * @param int $id
         */
        public function getNodeParentAction($id){
            $skillManager = new SkillManager();
            $resultSet = $skillManager->findParentAndGrandParent($id);
            
            $ancestorsFound = $resultSet->count();
            if ($ancestorsFound == 0){
                $json = new \Model\JsonResponse("error", "No parent found");
                $json->send();
            }
            else if ($ancestorsFound >= 1){
                $parentNode = $resultSet[0]['parent'];
                $skill = new Skill( $parentNode );
                $granPaId = ($ancestorsFound == 2) ? $resultSet[1]['parent']->getId() : null;
                $skill->setParentId( $granPaId ); 
            }

            $json = new \Model\JsonResponse();
            $json->setData( $skill->getJsonData() );
            $json->send();
        }

        /**
         * get first level children of a node, by its id
         */
        public function getNodeChildrenAction($id){

            $skillManager = new SkillManager();
            $resultSet = $skillManager->findChildren($id);
            
            $data = array();
            foreach ($resultSet as $row) {
                $skill = new Skill( $row['c'] );
                $skill->setParentId($id);
                $data[] = $skill->getJsonData();
            }

            $json = new \Model\JsonResponse();
            $json->setData($data);
            $json->send();
        }

        /**
         * get one node by id
         */
        public function getNodeAction($id){
            
            $skillManager = new SkillManager();
            $skill = $skillManager->findById($id);

            $json = new \Model\JsonResponse();
            $json->setData($skill->getJsonData());
            $json->send();

        }

        /**
         * Deletes a node
         * @todo handle response correctly
         * @param int $id
         */
        function deleteNodeAction($id){

            $skillManager = new SkillManager();
            $deleted = $skillManager->delete($id);

            if ($deleted){
                $json = new \Model\JsonResponse(null, "Node deleted.");
            }
            else {
                $json = new \Model\JsonResponse("error", "Node not found.");
            }
            $json->send();

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
            echo "inserting dummy data";

            $skillManager = new SkillManager();

            $maxChildrenPerNode = 10;
            $maxCharactersInSkillName = 40;

            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //delete all
            $query = new Query($this->client, "MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            //lorem ipsum generator
            $faker = \Faker\Factory::create();

            //create root node
            $rootNode = new Skill();
            $rootNode->setName("Skills");
            $rootNode->setParentId(NULL);
            $skillManager->save( $rootNode );
            
            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences", "Technicals");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_time", 30);

                $firstChild = new Skill();
                $firstChild->setName( $topChild );
                $firstChild->setParentId( $rootNode->getId() );
                $skillManager->save( $firstChild );

                $pa = $firstChild;
                for($j=1;$j<=4;$j++){
                    echo "<br /><br />j : $j<br />";
                    //random number of children for this top node
                    $numChildren = $faker->numberBetween(0,$maxChildrenPerNode);

                    //add them
                    for($i=0;$i<$numChildren;$i++){
                        echo "i : $i<br />";
                        $skillName = $faker->text($faker->numberBetween(5,$maxCharactersInSkillName));
                        
                        $newChild = new Skill();
                        $newChild->setName( $skillName );
                        $newChild->setParentId( $pa->getId() );
                        $skillManager->save( $newChild );

                        echo $newChild->getId() . " parent : " . $newChild->getParentId() . "<br />";

                    }
                    $pa = $newChild;
                }
            }
            echo "<br />done";
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