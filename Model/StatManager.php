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
         * Find last editions
         */
        public function getLatestChanges(){

            $limit = (!empty($_GET['limit'])) ? $_GET['limit'] : 40;
            $skip = (!empty($_GET['skip'])) ? $_GET['skip'] : 0;

                    //not specifying node label cause it can be different from :Skill
            $cyp = "MATCH (s)<-[r:CREATED|MODIFIED|TRANSLATED|AUTO_TRANSLATED|DELETED|MOVED]-
                    (u:User) 
                    RETURN r,s,u
                    ORDER BY r.timestamp DESC SKIP {skip} LIMIT {limit}";

            $query = new Query($this->client, $cyp, array(
                    "skip" => (int) $skip,
                    "limit" => (int) $limit
                ));
            $resultSet = $query->getResultSet();

            $activities = array();
            if ($resultSet->count() > 0){
                foreach($resultSet as $row){
                    $act = array();
                    $act['skillName'] = $row['s']->getProperty('name');
                    $act['action'] = $row['r']->getType();
                    $act['timestamp'] = $row['r']->getProperty('timestamp');

                    foreach($row['s']->getProperties() as $key => $value){
                        $act['skillProps'][$key] = $value;
                    }
                    foreach($row['r']->getProperties() as $key => $value){
                        $act['relProps'][$key] = $value;
                    }
                    foreach($row['u']->getProperties() as $key => $value){
                        $act['userProps'][$key] = $value;
                    }
                    $activities[] = $act;
                }
            }

            return $activities;

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
