<?php

    namespace App\Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Cypher\Query;
    use App\Model\Manager;


    class NotificationManager extends Manager {

        public function __construct(){
            parent::__construct();
            //$this->createSearchIndex();
        }


        public function sendNotification($type, Skill $skill, array $params = array()) {
            extract($params);
            
            //Create Notification node
            $notificationUuid = $this->saveNotification($type, $skill);

            //mainly set the skill on wich we are adding relations
            switch ($type) {
                //adding a child
                case "add-child":
                    if (!isset($parentSkill)) throw new \Exception("Required when sending add-child notification : parentSkill");
                    //sets the skill of interest
                    $currentSkill = $parentSkill;
                    break;

                //adding a parent
                case "add-parent":
                    if (!isset($selectedSkill)) throw new \Exception("Required when sending add-parent notification : selectedSkill");
                    $currentSkill = $selectedSkill;
                    break;

                //default ?
                case "delete":
                case "rename":
                case "discuss":
                case "translate":
                case "moved":
                    $currentSkill = $skill;
                    break;
            }

            //relation between skill creator and notification
            $skillOwner = $currentSkill->getOwner();
//            $this->saveSingleRelationWithUser($skillOwner, $notificationUuid, "owner");

            //relations between people who discussed the skill and the notif
            $discussionManager = new DiscussionManager();
            $usersInDiscussion = $discussionManager->getUsersInDiscussion($currentSkill->getUuid(), false);
            $this->saveMultipleRelationsWithUsers($usersInDiscussion, $notificationUuid, "discussed");
        
            //retrieve skill history to get users who renamed, translated or moved that skill
            $skillManager = new SkillManager();
            $history = $skillManager->getSkillHistory($currentSkill->getUuid(), 100);

            //stores only the user uuids in arrays before calling methods that create the relations
            $usersWhoMoved = array();
            $usersWhoTranslated = array();
            $usersWhoRenamed = array();
//            TODO: Need to fix history and uncomment this.
//            foreach($history as $event){
//                switch($event['action']){
//                    case "MOVED":
//                        $userWhoMoved[] = $event['userProps']['uuid'];
//                        break;
//                    case "TRANSLATED":
//                        $usersWhoTranslated[] = $event['userProps']['uuid'];
//                        break;
//                    case "RENAMED":
//                        $userWhoRenamed[] = $event['userProps']['uuid'];
//                        break;
//                }
//            }
//
            //remove duplicates (like if a user discussed more than one time the same skill)
            $usersWhoMoved = array_unique($usersWhoMoved);
            $usersWhoRenamed = array_unique($usersWhoRenamed);
            $usersWhoTranslated = array_unique($usersWhoTranslated);

            //create the relations
            if (!empty($usersWhoMoved))
                $this->saveMultipleRelationsWithUsers($usersWhoMoved, $notificationUuid, "moved");
            if (!empty($usersWhoTranslated))
                $this->saveMultipleRelationsWithUsers($usersWhoTranslated, $notificationUuid, "translated");
            if (!empty($usersWhoRenamed))
                $this->saveMultipleRelationsWithUsers($usersWhoRenamed, $notificationUuid, "renamed");
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
                
            $notificationUuid = str_replace(".", "f", uniqid('', true));

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


        /*
        * Get all user's notifications 
        */
        public function getAllUserNotifications($userUuid){
            $cyp = "MATCH 
                    (u:User {uuid:{userUuid}})<-[r:SENT]-(n:Notification)-[:IS_ABOUT]->(s) 
                    RETURN r,n,s
                    ORDER BY n.timestamp DESC 
                    LIMIT 100";

            $namedParams = array(
                "userUuid"  => $userUuid
            );
            $query = new Query($this->client, $cyp, $namedParams);
            $resultSet = $query->getResultSet();
            
            $notifs = array();
            if ($resultSet->count() > 0){
                foreach($resultSet as $row){
                    $notifContainer = array();
                    $notifContainer['relatedSkill'] = new Skill($row['s']);
                    $notifContainer['notif'] = new Notification($row['n']);
                    $notifContainer['reason'] = $row['r']->getProperty("reason");
                    $notifs[] = $notifContainer;
                }
            }
            return $notifs;
        } 

    }