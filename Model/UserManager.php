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

        }

        public function findById($id){

        }

        public function findByEmail($email){
            $cypher = "MATCH (user:User { email: {providedEmail} }) RETURN user LIMIT 1";
            $query = new Query($this->client, $cypher, array(
                "providedEmail" => $email)
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

    }
