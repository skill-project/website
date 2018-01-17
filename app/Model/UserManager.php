<?php
    
    namespace App\Model;

    use App\Model\User;
    use App\Model\Skill;
    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Cypher\Query;

    class UserManager {

        private $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

        public function save(User $user){
            $userNode = $user->getNode();
            $userNode->save();

            //add user label
            $label = $this->client->makeLabel('User');
            $userNode->addLabels(array($label));
            $user->setNode($userNode);
        }

        public function delete(User $user){

        }

        public function update(User $user){
            $cyp = "MATCH (u:User {uuid: {uuid}}) 
                    SET u.username = {username},
                        u.email = {email},
                        u.emailValidated = {emailValidated},
                        u.applicationStatus = {applicationStatus},
                        u.role = {role},
                        u.bio = {bio},
                        u.interests = {interests},
                        u.languages = {languages},
                        u.country = {country},
                        u.picture = {picture},
                        u.password = {password},
                        u.token = {token},
                        u.dateModified = {dateModified},
                        u.siteLanguage = {siteLanguage},
                        u.active = {active}";
//                        u.notificationSettings = {notificationSettings}";

            $updated =array(
                "uuid" => (string)$user->getUuid(),
                "username" => (string)$user->getUsername(),
                "email" => (string)$user->getEmail(),
                "emailValidated" => (string)$user->getEmailValidated(),
                "applicationStatus" => (string)$user->getApplicationStatus(),
                "role" => (string)$user->getRole(),
                "bio" => (string)$user->getBio(),
                "languages" => (string)$user->getLanguages(),
                "interests" => (string)$user->getInterests(),
                "country" => (string)$user->getCountry(),
                "picture" => (string)$user->getPicture(),
                "password" => (string)$user->getPassword(),
                "token" => (string)$user->getToken(),
                "dateModified" => (string)time(),
                "siteLanguage" => (string)$user->getSiteLanguage(),
                "active" => (string)$user->getActive()
//                "notificationSettings" => (string)$user->getNotificationSettings()
            );
            $query = new Query($this->client, $cyp,$updated);
//            var_dump($updated);
//            die;
            $result = $query->getResultSet();
            return $result;
        }

        public function findById($id){

        }

        /**
         * Just to dry methods below
         */ 
        protected function getFindByResult($cypher, $data){
            $query = new Query($this->client, $cypher, array(
                "data" => $data)
            );
            $resultSet = $query->getResultSet();
            if ($resultSet->count() == 1){
                $user = new User();
                $user->setNode($resultSet[0]['user']);
                $user->hydrateFromNode();
                //discard inactive user
                if ($user->isActive() === false){
                    return false;
                }
                return $user;
            }
            return false;
        }

        public function findByUuid($uuid){
            $cypher = "MATCH (user:User { uuid: {data} }) RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, $uuid);
        }

        public function findByUsername($username){
            $cypher = "MATCH (user:User) WHERE user.username =~ {data} RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, '(?i)'.$username);  //regexp for case insensitivity
        }


        public function findByEmail($email){
            $cypher = "MATCH (user:User { email: {data} }) RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, $email);
        }

        /**
         * @todo email OR username
         */
        public function findByEmailOrUsername($emailOrUsername){
            $cypher = "MATCH (user:User) 
                        WHERE user.username =~ {data} OR user.email = {data} 
                        RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, '(?i)'.$emailOrUsername); //regexp for case insensitivity
        }


        public function findAll($returnInactive = false){
            $cypher = "MATCH (user:User) RETURN user ORDER BY user.dateModified DESC";
            $query = new Query($this->client, $cypher);
            $resultSet = $query->getResultSet();
            $users = array();
            foreach($resultSet as $row){
                $user = new User();
                $user->setNode($row['user']);
                $user->hydrateFromNode();
                //do not add inactive users
                if (!$returnInactive && $user->isActive() === false){
                    continue;
                }
                $users[] = $user;
            }
            return $users;
        }

    }
