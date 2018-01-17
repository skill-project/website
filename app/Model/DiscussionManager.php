<?php
    
    namespace App\Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;
    use Illuminate\Routing\Route;
    use \Model\SkillManager;
    use App\Helpers\SecurityHelper as SH;
    use Illuminate\Http\Request;


    class DiscussionManager extends BaseModel {

        private $topics = array("The skill name",
                                "The skill translations",
                                "The skill position",
                                "The skill itself"
                            );


        public function saveNewMessage($skillUuid, $topic = "", $message, Request $request){
            $cyp = "MATCH (user:User {uuid:{userUuid}}), (skill:Skill {uuid:{skillUuid}}) 
                    CREATE 
                    (user)
                    -[:POSTED]->
                    (message:Message {topic: {topic}, message: {message}, timestamp:{timestamp}})
                    -[:IS_ABOUT]->(skill)
                    ";
            $query = new Query($this->client, $cyp, array(
                "userUuid" => SH::getUser($request)->getId(),
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

                foreach($row['user']->getProperties() as $key => $value){
                    $message['userProps'][$key] = $value;
                }

                $user = new User();
                $user->setNode($row['user']);
                $user->hydrateFromNode();
                $message['postedBy'] = SH::encode($user->getUsername());
                //if desactivated, replace username by anon.
                $message['userActive'] = true; //need in view to not show link to profile
                if ($user->isActive() === false){
                    $message['userActive'] = false;
                    $message['postedBy'] = _("Anonymous");
                }
                
                $messages[] = $message;
            }
            return $messages;
        }

        //$returnUsers
        //  true (default) : return an array of User objects
        //  false : return an array of user uuids
        public function getUsersInDiscussion($skillUuid, $returnUsers = true) {
            $cyp = "MATCH (user:User {active: true})-[:POSTED]->(message:Message)-[:IS_ABOUT]->(skill:Skill {uuid: {uuid}}) 
                    RETURN DISTINCT user";

            $query = new Query($this->client, $cyp, array(
                "uuid" => $skillUuid
            ));

            $resultSet = $query->getResultSet();

            $users = array();
            foreach($resultSet as $row) {
                if ($returnUsers) {
                    $user = new Skill();
                    $user->setNode($row['user']);
                    $user->hydrateFromNode();
                    $users[] = $user;
                }
                else {
                    $users[] = $row['user']->getProperty('uuid');
                }
                
            }

            return $users;
        }


        public function getTopics(){
            return $this->topics;
        }


        public function getRecentMessages($limit, $skip){
            $skillManager = new skillManager();

            $cyp = "MATCH (user:User)-[:POSTED]->(message:Message)-[:IS_ABOUT]->(skill:Skill)
                    RETURN user, message, skill
                    ORDER BY message.timestamp DESC 
                    SKIP {skip} LIMIT {limit}";
            
            $query = new Query($this->client, $cyp, array(
                "skip" => (int) $skip,
                "limit" => (int) $limit
                ));

            $resultSet = $query->getResultSet();
            $messages = array();
            foreach($resultSet as $row){
                $message = array();
                $message['message'] = SH::encode($row['message']->getProperty("message"));
                $message['timestamp'] = $row['message']->getProperty("timestamp");
                $message['date'] = date("d/m/Y H:i:s", $message['timestamp']);
                $message['skillURL'] = \Controller\Router::url("goTo", array("slug" => $row['skill']->getProperty('slug')));

                $skill = new Skill($row['skill']);
                $message['skillName'] = $skill->getLocalName();

                $message['skillContext'] = $skillManager->getContext($row['skill']->getProperty('uuid'));
                // $message['topic'] = SH::encode($row['message']->getProperty("topic"));

                $user = new Skill();
                $user->setNode($row['user']);
                $user->hydrateFromNode();
                
                if ($user->active_flag) $message['userProfileURL'] = Route::url('viewProfile', array('username' => $row['u']->getProperty('username')));
                else $message['userProfileURL'] = "";

                $message['postedBy'] = SH::encode($user->username);

                //if desactivated, replace username by anon.
                $message['userActive'] = true; //need in view to not show link to profile
                if ($user->active_flag === false){
                    $message['userActive'] = false;
                    $message['postedBy'] = _("Anonymous");
                }
                
                $messages[] = $message;
            }
            return $messages;
        }


   }