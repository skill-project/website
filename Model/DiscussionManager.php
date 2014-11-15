<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    use \Utils\SecurityHelper as SH;

    class DiscussionManager extends Manager {

        private $topics = array("The skill name",
                                "The skill translations",
                                "The skill position",
                                "The skill itself"
                            );


        public function saveNewMessage($skillUuid, $topic = "", $message){
            $cyp = "MATCH (user:User {uuid:{userUuid}}), (skill:Skill {uuid:{skillUuid}}) 
                    CREATE 
                    (user)
                    -[:POSTED]->
                    (message:Message {topic: {topic}, message: {message}, timestamp:{timestamp}})
                    -[:IS_ABOUT]->(skill)
                    ";
            $query = new Query($this->client, $cyp, array(
                "userUuid" => \Utils\SecurityHelper::getUser()->getUuid(),
                "skillUuid" => $skillUuid,
                "topic" => "",
                // "topic" => SH::safe($topic),
                "message" => SH::safe($message),
                "timestamp" => time()
            ));

            $resultSet = $query->getResultSet();
            return $resultSet;
        }

        public function getSkillMessages($skillUuid){
            $cyp = "MATCH (user:User)-[:POSTED]->(message:Message)-[:IS_ABOUT]->(:Skill {uuid:{uuid}}) 
                    RETURN user, message 
                    ORDER BY message.timestamp DESC 
                    LIMIT 100 ";
            $query = new Query($this->client, $cyp, array(
                "uuid" => $skillUuid
            ));
            $resultSet = $query->getResultSet();
            $messages = array();
            foreach($resultSet as $row){
                $message = array();
                $message['message'] = SH::encode($row['message']->getProperty("message"));
                $message['timestamp'] = $row['message']->getProperty("timestamp");
                $message['date'] = date("F jS, Y \a\\t H:i", $message['timestamp']);
                // $message['topic'] = SH::encode($row['message']->getProperty("topic"));

                $user = new User();
                $user->setNode($row['user']);
                $user->hydrateFromNode();
                $message['postedBy'] = SH::encode($user->getUsername());
                //if desactivated, replace username by anon.
                $message['userActive'] = true; //need in view to not show link to profile
                if ($user->isActive() === false){
                    $message['userActive'] = false;
                    $message['postedBy'] = _("Anon.");
                }
                
                $messages[] = $message;
            }
            return $messages;
        }

        public function getUsersInDiscussion($skillUuid) {
            $cyp = "MATCH (user:User)-[:POSTED]->(message:Message)-[:IS_ABOUT]->(skill:Skill {uuid: {uuid}}) 
                    RETURN DISTINCT user";

            $query = new Query($this->client, $cyp, array(
                "uuid" => $skillUuid
            ));

            $resultSet = $query->getResultSet();
            $users = array();
            foreach($resultSet as $row) {
                $user = new User();
                $user->setNode($row['user']);
                $user->hydrateFromNode();
                if ($user->isActive() === false){
                    continue;
                }
                $users[] = $user;
            }

            return $users;
        }


        public function getTopics(){
            return $this->topics;
        }


   }