<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\Skill;
    use \Utils\SecurityHelper;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    class FixtureController extends Controller {

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
            $rootSkill->setNewUuid();
            $rootSkill->setName("Skills");
            $rootSkill->setDepth(1);

            $rootSkill->generateNode();

            $skillManager->save( $rootSkill );
            
            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences", "Technicals");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_time", 30);

                $firstChild = new Skill();
                $firstChild->setNewUuid();
                $firstChild->setName( $topChild );
                $firstChild->setDepth(2);

                $firstChild->generateNode();

                $skillManager->save( $firstChild, $rootSkill->getId() );
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
                    $s->setNewUuid();
                    $s->setName( $faker->text($faker->numberBetween(5,$maxCharactersInSkillName)) );
                    $s->setDepth($depth);

                    $s->generateNode();

                    $skillManager->save( $s, $parentRow['s']->getId() );
                }
            }
        }

    }