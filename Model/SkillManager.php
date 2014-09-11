<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    class SkillManager {

        private $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

        public function save(Skill $skill){
            $skillNode = $skill->getNode();
            $skillNode->save();

            //add skill label
            $label = $this->client->makeLabel('Skill');
            $skillNode->addLabels(array($label));
            $skill->setNode($skillNode);
        }

        public function delete(Skill $skill){

        }

        public function update(Skill $skill){

        }

        public function findById($id){

        }

        public function findRootNode(){
            $cypher = 'MATCH (n {name: "Skills"}) RETURN n LIMIT 1';
            $query = new Query($this->client, $cypher);
            $resultSet = $query->getResultSet();
            
            if ($resultSet->count() == 1){
                $rootNode = $resultSet[0]['n'];
                return $rootNode;
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

            $allNodes = $traversal->getResults($rootNode, Traversal::ReturnTypeNode);
            return $allNodes;
        }

    }
