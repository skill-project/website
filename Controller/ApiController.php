<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\Skill;
    use \Utils\SecurityHelper;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    /*
    [0] => testAction
    [1] => getRootNodeAction
    [2] => getNodeParentAction
    [3] => getNodeChildrenAction
    [4] => getNodeAction
    [5] => deleteSkillAction
    [6] => renameSkillAction
    [7] => searchNodeAction
    [8] => dummyDataAction
    [9] => addSkillAction
    [10] => __construct
    */

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
                //print_r($skill);
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
        function deleteSkillAction($id){

            $skillManager = new SkillManager();
            $deletionResult = $skillManager->delete($id);

            if ($deletionResult === true){
                $json = new \Model\JsonResponse(null, _("Node deleted."));
            }
            else {
                $json = new \Model\JsonResponse("error", $deletionResult);
            }
            $json->send();

        }

        /**
         * Rename a skill
         */
        function renameSkillAction($id){

            SecurityHelper::lock();

            if (!empty($_POST)){

                $skillName = $_POST['skillName'];
                $skillId = $_POST['skillId'];

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillId($skillId);

                if ($validator->isValid()){

                    $skillManager = new SkillManager();
                    $skill = $skillManager->findById($skillId);

                    $previousName = $skill->getName();
                    $skill->setName( $skillName );

                    $skillManager->update($skill);

                    //add modifier skill relationship
                    $userNode = $this->client->getNode($_SESSION['user']['id']);
                    $rel = $this->client->makeRelationship();
                    $rel->setStartNode($userNode)
                        ->setEndNode($skill->getNode())
                        ->setType('MODIFIED')
                        ->setProperty('date', date("Y-m-d H:i:s"))
                        ->setProperty('previousName', $previousName)
                        ->save();
                }
                else {
                    print_r($validator->getErrors());   
                }
            }
        }

        /**
         * Search by keywords
         */
        public function searchNodeAction($keywords){
            $keywords = urldecode($keywords);
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $matches = $searchIndex->query('name:*'.strtolower($keywords).'*~');
            $data = array();
            foreach ($matches as $node) {
                $nodeParentRelationship = $node->getRelationships(
                    array('HAS'), Relationship::DirectionIn
                );

                $parentId = null;
                if (count($nodeParentRelationship) == 1){
                    $parentId = $nodeParentRelationship[0]->getStartNode()->getId();
                }
                $skill = new Skill( $node );
                $data[] = $skill->getJsonData();
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

            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //delete all
            $query = new Query($this->client, "MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            //create root node
            $rootSkill = new Skill();
            $rootSkill->setName("Skills");
            $rootSkill->setParentId(NULL);
            $rootSkill->setDepth(1);

            $rootSkill->generateNode();

            $skillManager->save( $rootSkill );
            
            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences", "Technicals");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_time", 30);

                $firstChild = new Skill();
                $firstChild->setName( $topChild );
                $firstChild->setParentId( $rootSkill->getId() );
                $firstChild->setDepth(2);

                $firstChild->generateNode();

                $skillManager->save( $firstChild );
            }

            $this->addDummyChildAtDepth(3);
            $this->addDummyChildAtDepth(4);
            $this->addDummyChildAtDepth(5);

            echo "<br />done";
        }


        private function addDummyChildAtDepth($depth){

            $maxChildrenPerNode = 10;
            $maxCharactersInSkillName = 40;

            //lorem ipsum generator
            $faker = \Faker\Factory::create();

            //get parents at higher level
            $skillManager = new SkillManager();
            $resultSet = $skillManager->findAtDepth($depth - 1);

            //for each top children, create it, then add children
            foreach($resultSet as $parentRow){

                $numChildren = $faker->numberBetween(0,$maxChildrenPerNode);
                ini_set("max_execution_time", 30);

                for($i=0;$i<$numChildren;$i++){
                    $s = new Skill();
                    $s->setName( $faker->text($faker->numberBetween(5,$maxCharactersInSkillName)) );
                    $s->setParentId( $parentRow['s']->getId() );
                    $s->setDepth($depth);

                    $s->generateNode();

                    $skillManager->save( $s );
                }
            }
        }


        /**
         * Add a new skill
         */
        public function addSkillAction(){

            SecurityHelper::lock();

            if (!empty($_POST)){
                

                $skillName = $_POST['skillName'];
                $skillParentId = $_POST['skillParentId'];

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillParentId($skillParentId);

                $skillManager = new SkillManager();
                $parentNode = $skillManager->findById( $skillParentId );

                
                if ($validator->isValid() && $parentNode){

                    $skill = new Skill();
                    $skill->setName($skillName);
                    $skill->setParentId($skillParentId);
                    $skill->setDepth( $parentNode->getDepth() + 1 );

                    $skillManager->save($skill);

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

    }