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
            die("todo");
        }




        /**
         * Retrieve all nodes with max num child
         * @return array
         */
        public function getMaxedSkillsByCap($max_child, $capProperty = "capMaxChild", $upper_limit = 99){
            $cyp = "MATCH (gp:Skill)-[:HAS*0..1]->(p:Skill)-[:HAS]->(s:Skill)-[:HAS]->(c:Skill)
                            WITH s, COUNT(c) AS child_num, gp, p, toInt(s.$capProperty) AS skillMax
                            WHERE 
                            (
                                child_num >= {max_child} 
                                AND child_num <= {upper_limit}
                            )
                            OR (
                                HAS (s.$capProperty) 
                                AND child_num >= skillMax 
                                AND child_num <= {upper_limit}
                            ) 
                            RETURN s,gp,p,child_num";
            $query = new Query($this->client, $cyp, array("max_child" => $max_child, "upper_limit" => $upper_limit));
            $resultSet = $query->getResultSet();
            if ($resultSet->count() > 0){
                $results = array();
                foreach ($resultSet as $row) {

                    $skill = new Skill($row['s']);
                    $uuid = $skill->getUuid();
                    if (array_key_exists($uuid, $results)){
                        continue;
                    }
                    $results[$uuid] = array(
                        "skill" => $skill,
                        "child_num" => $row['child_num']
                    );
                    if (empty($results[$uuid]['parent']) && !empty($row['p']->getProperty('name'))){
                        $parentSkill = new Skill($row['p']);
                        $results[$uuid]['parent'] = $parentSkill;
                    }
                    if (empty($results[$uuid]['gp']) && !empty($row['gp']->getProperty('name')) 
                            && $row['gp']->getProperty('name') != $row['p']->getProperty('name')){
                        $gpSkill = new Skill($row['gp']);
                        $results[$uuid]['gp'] = $gpSkill;
                    }
                }
                return $results;
            }

            return false;
        }


        /**
         * Retrieve all nodes with max num child
         * @return array
         */
        public function getMaxedSkills(){
            $cyp = "MATCH (s:Skill)-[:HAS]->(c:Skill)
                        WITH s, COUNT(c) AS child_num
                        WHERE child_num = {max_child}
                        RETURN s
                        ORDER BY s.created ASC";
            $query = new Query($this->client, $cyp, array("max_child" => \Config\Config::CAP_MAX_CHILD));
            $resultSet = $query->getResultSet();
            if ($resultSet->count() > 0){
                $data = array();
                foreach ($resultSet as $row) {
                    $skill = new Skill( $row['s'] );
                    $data[] = $skill;
                }
                return $data;
            }
            return false;
        }


    }
