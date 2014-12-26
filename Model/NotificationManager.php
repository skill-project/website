<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Cypher\Query;
    use \Config\Config;

    class NotificationManager extends Manager {

    	public function __construct() {
    		parent::__construct();
    	}

        public function sendNotification($type, Skill $skill, array $params = array()) {
            extract($params);

            $discussionManager = new DiscussionManager();
            
            //Create Notification node
            $notificationUuid = $this->saveNotification($type, $skill);

            switch ($type) {
                case "add-child":
                    if (!isset($parentSkill)) throw new \Exception("Required when sending add-child notification : parentSkill");

                    //Create relationship with owner
                    $parentSkillOwner = $parentSkill->getOwner();
                    $this->saveSingleRelationWithUser($parentSkillOwner, $notificationUuid, "owner");

                    //Create as many relationships as there are users who discussed the skill
                    //Retrieves an array of user uuids of users who discussed the skill
                    $usersInDiscussion = $discussionManager->getUsersInDiscussion($parentSkill->getUuid(), false);
                    $this->saveMultipleRelationsWithUsers($usersInDiscussion, $notificationUuid, "discussed");

                    break;

                case "add-parent":
                    if (!isset($selectedSkill)) throw new \Exception("Required when sending add-parent notification : selectedSkill");

                    $selectedSkillOwner = $selectedSkill->getOwner();
                    $this->saveSingleRelationWithUser($selectedSkillOwner, $notificationUuid, "owner");

                    $usersInDiscussion = $discussionManager->getUsersInDiscussion($selectedSkill->getUuid(), false);
                    $this->saveMultipleRelationsWithUsers($usersInDiscussion, $notificationUuid, "discussed");

                    break;

                case "delete":
                case "rename":
                case "discuss":
                case "translate":
                case "moved":

                    $skillOwner = $skill->getOwner();
                    $this->saveSingleRelationWithUser($skillOwner, $notificationUuid, "owner");

                    $usersInDiscussion = $discussionManager->getUsersInDiscussion($skill->getUuid(), false);
                    $this->saveMultipleRelationsWithUsers($usersInDiscussion, $notificationUuid, "discussed");

                    break;

            }
        }

        /*  
        * Create a Notification node and relates it to the skill (or deleted skill)
        */
        protected function saveNotification($type, Skill $skill){
            
            $cyp = "MATCH (s {uuid: {skillUuid}}) 
                    WHERE s:Skill OR s:DeletedSkill 
                    CREATE 
                    (notification:Notification {
                        uuid: {notificationUuid},
                        type: {type},
                        timestamp: {now}
                    })-[:IS_ABOUT]->(s)";
                
            $notificationUuid = \Utils\IdGenerator::getUniqueId();

            $namedParams = array(
                "now"               => time(),
                "notificationUuid"  => $notificationUuid,
                "type"              => $type,
                "skillUuid"         => $skill->getUuid()
            );

            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();

            return $notificationUuid;
        }


        /*  
        * Create a relation between a notification and a user
        */
        protected function saveSingleRelationWithUser(User $user, $notificationUuid, $reason){
            $cyp = "MATCH
                        (u:User {uuid: {ownerUuid} }), 
                        (n:Notification {uuid: {notificationUuid} }) 
                    CREATE (u)<-[:SENT {reason: {reason}}]-(n)";

            $namedParams = array(
                "ownerUuid"         => $user->getUuid(),
                "notificationUuid"  => $notificationUuid,
                "reason"            => $reason
            );
            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();
        }



        /*  
        * Create a relationship between a notification and many users
        */
        protected function saveMultipleRelationsWithUsers(array $userUuids, $notificationUuid, $reason){
            $cyp = "MATCH
                        (u:User), 
                        (n:Notification {uuid: {notificationUuid} }) 
                    WHERE u.uuid IN ['" . implode("', '", $userUuids) . "']
                    CREATE (u)<-[:SENT {reason: {reason}}]-(n)";

            $namedParams = array(
                "notificationUuid"  => $notificationUuid,
                "reason"            => $reason
            );
            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();
        }

    }