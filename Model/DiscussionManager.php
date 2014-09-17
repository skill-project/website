<?php
    
    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;



    class DiscussionManager extends Manager {

        private $topics = array("The skill name",
                                "The skill translations",
                                "The skill position",
                                "The skill itself"
                            );


        public function saveNewMessage($skillUuid, $topic, $message){
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
                "topic" => $topic,
                "message" => $message,
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
                $message['message'] = $row['message']->getProperty("message");
                $message['timestamp'] = $row['message']->getProperty("timestamp");
                $message['date'] = date("F jS, Y \a\\t H:i", $message['timestamp']);
                $message['topic'] = $row['message']->getProperty("topic");
                $message['postedBy'] = $row['user']->getProperty("username");
                $messages[] = $message;
            }
            return $messages;
        }


        public function getTopics(){
            return $this->topics;
        }


   }