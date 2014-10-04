<?php
    
    namespace Model;

    use \Everyman\Neo4j\Cypher\Query;

    class StatManager extends Manager {

        public function __construct(){
            parent::__construct();
        }


        /**
         * Get the depth of the deepest skill
         * @return int Max depth
         * 
         */
        public function getMaxDepth(){
            $cyp = "MATCH (s:Skill)
                        RETURN max(s.depth) as depth";
            $query = new Query($this->client, $cyp);
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                return $row['depth'];
            }
        }


        /**
         * Count number of node of a label
         * @param string the label
         * @return int Number of nodes
         * 
         */
        public function countLabel($label){

            $label = str_replace(":", "", ucfirst($label));

            $cyp = "MATCH (s:$label)
                        RETURN count(s) as childrenNumber";
            $query = new Query($this->client, $cyp);
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                return $row['childrenNumber'];
            }
        }


        /**
         * Count average number of children
         * @return int Number of mean children
         * 
         */
        public function getMeanNumberOfSkillChildren(){
            die("doesnt work");
            $cyp = "MATCH (s:Skill)-[r:HAS]->(c:Skill)
                        RETURN count(r) as meanNumber";
            $query = new Query($this->client, $cyp);
            $resultSet = $query->getResultSet();
            foreach($resultSet as $row){
                echo $row['meanNumber'];
                //return $row['meanNumber'];
            }
            die();
        }

    }
