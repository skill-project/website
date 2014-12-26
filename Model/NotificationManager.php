<?php

    namespace Model;

    use \Model\SkillManager;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Cypher\Query;
    use \Cocur\Slugify\Slugify;
    use \Config\Config;

    class NotificationManager extends Manager {

    	public function __construct() {
    		parent::__construct();
    	}

        public function sendNotification($type, array $params) {
            extract($params);

            $skillManager = new SkillManager();
            $discussionManager = new DiscussionManager();

            switch ($type) {
                case "add-child":
                    if (!isset($parentSkill) or !isset($newSkill)) throw new \Exception("Required when sending add-child notification : parentSkill, newSkill");
                    
                    //Create Notification node
                    $notificationUuid = $this->saveNotification($type, $newSkill);

                    //Create relationship with owner
                    $parentSkillOwner = $parentSkill->getOwner();
                    $this->saveSingleRelationWithUser($parentSkillOwner, $notificationUuid, "owner");

                    //Create as many relationships as there are users who discussed the skill
                    //Retrieves an array of user uuids of users who discussed the skill
                    $usersInDiscussion = $discussionManager->getUsersInDiscussion($parentSkill->getUuid(), false);
        
                    $this->saveMultipleRelationsWithUsers($usersInDiscussion, $notificationUuid, "discussed");

                    break;
            }
        }


        protected function saveNotification($type, Skill $skill){
            
            $cyp = "MATCH (s:Skill {uuid: {skillUuid}}) 
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