<?php
    
    namespace Model;

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
                        u.role = {role},
                        u.bio = {bio},
                        u.interests = {interests},
                        u.languages = {languages},
                        u.country = {country},
                        u.picture = {picture},
                        u.password = {password},
                        u.token = {token},
                        u.dateModified = {dateModified}";

            $query = new Query($this->client, $cyp, array(
                    "uuid" => $user->getUuid(),
                    "username" => $user->getUsername(),
                    "email" => $user->getEmail(),
                    "emailValidated" => $user->getEmailValidated(),
                    "role" => $user->getRole(),
                    "bio" => $user->getBio(),
                    "languages" => $user->getLanguages(),
                    "interests" => $user->getInterests(),
                    "country" => $user->getCountry(),
                    "picture" => $user->getPicture(),
                    "password" => $user->getPassword(),
                    "token" => $user->getToken(),
                    "dateModified" => time()
                )
            );
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
                return $user;
            }
            return false;
        }

        public function findByUuid($uuid){
            $cypher = "MATCH (user:User { uuid: {data} }) RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, $uuid);
        }

        public function findByUsername($username){
            $cypher = "MATCH (user:User { username: {data} }) RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, $username);
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
                        WHERE user.username = {data} OR user.email = {data} 
                        RETURN user LIMIT 1";
            return $this->getFindByResult($cypher, $emailOrUsername);
        }

    }
