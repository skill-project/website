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

        public function sendNotification($type, $params) {
            extract($params);

            $skillManager = new SkillManager();
            $discussionManager = new DiscussionManager();

            switch ($type) {
                case "add-child":
                    if (!isset($parentSkill) or !isset($newSkill)) throw new \Exception("Required when sending add-child notification : parentSkill, newSkill");

                    //AWAITING SOME FACTORING
                    
                    //Create Notification node
                    //=======================
                    $cyp = "CREATE 
                            (notification:Notification {
                                uuid: {notificationUuid},
                                type: {type},
                                timestamp: {now}
                            })-[:IS_ABOUT]->(s:Skill {uuid: {newSkillUuid}})";

                    $notificationUuid = \Utils\IdGenerator::getUniqueId();
                        
                    $namedParams = array(
                        "now"               => time(),
                        "notificationUuid"  => $notificationUuid,
                        "type"              => $type,
                        "newSkillUuid"      => $newSkill->getUuid()
                    );

                    $query = new Query($this->client, $cyp, $namedParams);
                    $resultSet = $query->getResultSet();
                    //=======================


                    
                    //Create relationship with owner
                    //==============================
                    $cyp = "MATCH
                                (u:User {uuid: {ownerUuid} }), 
                                (n:Notification {uuid: {notificationUuid} }) 
                            CREATE (u)<-[:SENT {reason: 'owner'}]-(n)";

                    $parentSkillOwner = $parentSkill->getOwner();

                    $namedParams = array(
                        "ownerUuid"             => $parentSkillOwner->getUuid(),
                        "notificationUuid"  => $notificationUuid
                    );
                    $query = new Query($this->client, $cyp, $namedParams);
                    $resultSet = $query->getResultSet();
                    //==============================



                    //Create as many relationships as there are users who discussed the skill
                    //=======================================================================
                    
                    //Retrieves an array of user uuids of users who discussed the skill
                    $usersInDiscussion = $discussionManager->getUsersInDiscussion($parentSkill->getUuid(), false);

                    $cyp = "MATCH
                                (u:User), 
                                (n:Notification {uuid: {notificationUuid} }) 
                            WHERE u.uuid IN ['" . implode("', '", $usersInDiscussion) . "']
                            CREATE (u)<-[:SENT {reason: 'discussed'}]-(n)";

                    $user = $parentSkill->getOwner();

                    $namedParams = array(
                        "notificationUuid"  => $notificationUuid
                    );
                    $query = new Query($this->client, $cyp, $namedParams);
                    $resultSet = $query->getResultSet();
                    //=======================================================================


                    break;
            }
        }


    }

?>