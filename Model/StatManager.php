<?php
    
    namespace Model;

    use \Model\SkillManager;
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
        public function getLatestChanges($limit = 40, $skip = 0){
            $languageCodes = new \Model\LanguageCode();

            $cyp = "MATCH (s)<-[r:CREATED|MODIFIED|TRANSLATED|AUTO_TRANSLATED|DELETED|MOVED]-(u:User)
                    WHERE s:Skill OR s:DeletedSkill
                    RETURN r,s,u, labels(s) AS labels
                    ORDER BY r.timestamp DESC SKIP {skip} LIMIT {limit}";

            $query = new Query($this->client, $cyp, array(
                    "skip" => (int) $skip,
                    "limit" => (int) $limit
                ));
            $resultSet = $query->getResultSet();

            $activities = array();
            if ($resultSet->count() > 0){
                $skillManager = new skillManager();

                foreach($resultSet as $row){
                    $act = array();
                    $act['skillDeleted'] = $row["labels"][0] == "DeletedSkill" ? true : false;

                    $skill = new Skill($row['s']);
                    $act['skillName'] = $skill->getLocalName();

                    $act['skillURL'] = \Controller\Router::url("goTo", array("slug" => $row['s']->getProperty('slug')), true);
                    $act['skillContext'] = $skillManager->getContext($row['s']->getProperty('uuid'));

                    if ($act['skillDeleted'] == false)  $act['skillFormatted'] = $act["skillContext"] . " > <a href='" . $act["skillURL"] . "'>" . $act["skillName"] .  "</a>";
                    else                                $act['skillFormatted'] = $act["skillContext"] . " > <strike>" . $act["skillName"] . "</strike>";

                    $act['action'] = $row['r']->getType();
                    $act['timestamp'] = $row['r']->getProperty('timestamp');
                    $act['userProfileURL'] = \Controller\Router::url('viewProfile', array('username' => $row['u']->getProperty('username')));

                    foreach($row['s']->getProperties() as $key => $value){
                        $act['skillProps'][$key] = $value;
                    }
                    foreach($row['r']->getProperties() as $key => $value){
                        $act['relProps'][$key] = $value;
                    }
                    foreach($row['u']->getProperties() as $key => $value){
                        $act['userProps'][$key] = $value;
                    }

                    switch ($act['action']) {
                        case "CREATED":
                            $act['actionDetails'] = _("Created");
                            break;
                        case "AUTO_TRANSLATED":
                            $translatedInto = $languageCodes->getNames($act['relProps']['to']);
                            
                            $act['actionDetails'] = sprintf(_("Automatically translated into %s: \"%s\""), $translatedInto["name"], $act['relProps']['name']);
                            break;
                        case "MOVED":
                            $fromParent = $skillManager->findByUuid($act['relProps']['fromParent']);
                            if (!$fromParent) $fromParentDeleted = $skillManager->findDeletedByUuid($act['relProps']['fromParent']);
                            $fromParentName = $fromParent ? "\"" . $fromParent->getName() . "\"" : "<strike>" . $fromParentDeleted->getName() . "</strike> <em>(deleted)</em>";
                            
                            $toParent = $skillManager->findByUuid($act['relProps']['toParent']);
                            if (!$toParent) $toParentDeleted = $skillManager->findDeletedByUuid($act['relProps']['toParent']);
                            $toParentName = $toParent ? "\"" . $toParent->getName() . "\"" : "<strike>" . $toParentDeleted->getName() . "</strike> <em>(deleted)</em>";
                            
                            $act['actionDetails'] = sprintf(_("Moved from %s into %s"), $fromParentName, $toParentName);
                            break;
                        case "MODIFIED": //Renamed really
                            if (!empty($act['relProps']['fromName'])){
                                $act['actionDetails'] = sprintf(_("Renamed from \"%s\" to \"%s\""), $act['relProps']['fromName'], $act['skillName']);
                            }
                            else {
                                $act['actionDetails'] = sprintf(_("Renamed to \"%s\""), $act['skillName']);
                            }
                            break;
                        case "TRANSLATED":
                            $translatedInto = $languageCodes->getNames($act['relProps']['to']);
                            
                            $act['actionDetails'] = sprintf(_("Translated into %s: \"%s\""), $translatedInto["name"], $act['relProps']['name']);
                            break;
                        case "DELETED":
                            $act['actionDetails'] = _("Deleted");
                            break;
                        default:
                            $act['actionDetails'] = $act['action'];
                            break;
                    }

                    $activities[] = $act;
                }
            }

            usort($activities, array($skillManager, "sortActivities"));

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
                                child_num > {max_child} 
                                AND child_num <= {upper_limit}
                            )
                            OR (
                                HAS (s.$capProperty) 
                                AND child_num > skillMax 
                                AND child_num <= {upper_limit}
                            ) 
                            RETURN s,gp,p,child_num";
            $query = new Query($this->client, $cyp, array("max_child" => $max_child, "upper_limit" => $upper_limit));
            $resultSet = $query->getResultSet();
            if ($resultSet->count() > 0){
                $skillManager = new SkillManager();

                $results = array();
                foreach ($resultSet as $row) {

                    $skill = new Skill($row['s']);
                    $uuid = $skill->getUuid();
                    if (array_key_exists($uuid, $results)){
                        continue;
                    }
                    $results[$uuid] = array(
                        "skill" => $skill,
                        "child_num" => $row['child_num'],
                        "context" => $skillManager->getContext($uuid)
                    );
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
