<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\DiscussionManager;
    use \Model\UserManager;
    use \Model\NotificationManager;
    use \Model\Skill;
    use \Model\User;
    use \Utils\SecurityHelper as SH;
    use \View\AjaxView;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    class ApiController extends Controller {
        
        /**
         * get the root "Skills" node
         */
        public function getRootNodeAction(){

            SH::checkUsage(10);

            $skillManager = new SkillManager();            
            $skill = $skillManager->findRootNode();
            
            $json = new \Model\JsonResponse();
            $json->setData($skill->getJsonData());
            $json->send();

        }


        /**
         * get first level children of a node, by its uuid
         * @param string Parent uuid
         */
        public function getNodeChildrenAction($uuid){

            SH::checkUsage(30);

            $skillManager = new SkillManager();
            $data = $skillManager->findChildren($uuid);

            if ($data){
                $json = new \Model\JsonResponse();
                $json->setData($data);
            }
            else {
                $json = new \Model\JsonResponse("ok", "No more children");
            }

            $json->send();

        }

        /**
         * Returns node parent
         * 
         * @param int $id
         */
        public function getNodeParentAction($uuid){

            SH::checkUsage(30);

            $skillManager = new SkillManager();
            $resultSet = $skillManager->findParentAndGrandParent($uuid);
            
            $ancestorsFound = $resultSet->count();
            if ($ancestorsFound == 0){
                $json = new \Model\JsonResponse("error", "No parent found");
                $json->send();
            }
            else if ($ancestorsFound >= 1){
                $parentNode = $resultSet[0]['parent'];
                $skill = new Skill( $parentNode );
            }

            $json = new \Model\JsonResponse();
            $json->setData( $skill->getJsonData() );
            $json->send();
        }



        /**
         * get one node by uuid
         */
        public function getNodeAction($uuid){

            SH::checkUsage(50);
            
            $skillManager = new SkillManager();
            $skill = $skillManager->findByUuid($uuid);

            $json = new \Model\JsonResponse();
            $json->setData($skill->getJsonData());
            $json->send();

        }


        /**
         * get all nodes up to the root
         */
        public function getNodePathToRootAction($slug){

            SH::checkUsage(5);
            
            $skillManager = new SkillManager();
            $uuid = $skillManager->getUuidFromSlug($slug);
            $path = $skillManager->findNodePathToRoot($uuid);

            $json = new \Model\JsonResponse();
            $json->setData($path);
            $json->send();

        }

        /**
         * Deletes a node
         * @todo handle response correctly
         * @param string $uuid
         */
        function deleteSkillAction(){

            SH::checkUsage(5);
            //lock is down there

            $deletionResult = false;

            if (!empty($_POST)){

                $skillUuid = $_POST['skillUuid'];

                SH::lock("creator", $skillUuid, "delete");

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){
                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);
                    $deletionResult = $skillManager->delete($skillUuid, SH::getUser()->getUuid());
                }
            }

            if ($deletionResult === true){
                $this->warn("deleted", $skill);

                //send notification
                $notificationManager = new NotificationManager();
                $notificationManager->sendNotification("delete", $skill);

                $json = new \Model\JsonResponse("ok", _("Node deleted."));
            }
            else {
                $json = new \Model\JsonResponse("error", $deletionResult);
            }
            $json->send();

        }


        /**
         * Add a comment on a skill
         */
        public function discussSkillAction(){

            //lock 
            SH::checkUsage(60);
            SH::lock();

            if (!empty($_POST)){
                $skillUuid = $_POST['skillUuid'];

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);

                $message = $_POST['message'];
                // $topic = $_POST['topic'];

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);
                $validator->validateMessage($message);
                // $validator->validateMessageTopic($topic);

                if ($validator->isValid()){

                    $discussionMananager = new DiscussionManager();
                    $result = $discussionMananager->saveNewMessage($skillUuid, null, $message);      
                    if ($result){
                        $json = new \Model\JsonResponse("ok", _("Message posted!"));
                        $skillManager = new SkillManager();
                        $skill = $skillManager->findByUuid($skillUuid);
                        $this->warn("discussed", $skill, array(
                            "message" => $message
                        ));

                        //send notification
                        $notificationManager = new NotificationManager();
                        $notificationManager->sendNotification("discuss", $skill);

                        $this->sendNotifications($skill, $message);

                    }
                    else {
                        $json = new \Model\JsonResponse("error", _("Error posting message."));
                    }
                    
                }
                else {
                    $json = new \Model\JsonResponse("error", _("An error occured."));
                    $data = array();
                    $data["errors"] = $validator->getErrors();
                    $json->setData($data);
                }      

            }
            $json->send();

        }


        /**
         * Move or duplicate a skill
         */
        public function moveSkillAction(){
            
            SH::checkUsage(10);
            //lock is down there

            if (!empty($_POST)){
                $skillUuid = $_POST['selectedSkillUuid'];

                SH::lock("creator", $skillUuid, "move");

                $skillManager = new SkillManager();
                $newParentUuid = $_POST['destinationUuid'];
                $type = $_POST['moveType'];
                $skill = $skillManager->findByUuid($skillUuid);
                $newParent = $skillManager->findByUuid($newParentUuid);
                
                //retrieve current user uuid
                $userUuid = SH::getUser()->getUuid();

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);
                $validator->validateSkillUuid($newParentUuid);
                $validator->validateUniqueChild($newParentUuid, $skill->getName());
                $validator->validateNumChild($newParent);

                if ($validator->isValid()){

                    switch($type){
                        case "move":
                            $result = $skillManager->move($skillUuid, $newParentUuid, $userUuid);

                            //correct all depths
                            $skillManager->updateAllDepths();

                            $json = new \Model\JsonResponse("ok", _("Skill moved!"));
                            $data = array();
                            $data['skill'] = $skill->getJsonData();
                            $data['parent'] = $newParent->getJsonData();
                            $json->setData($data);

                            //send notification
                            $notificationManager = new NotificationManager();
                            $notificationManager->sendNotification("move", $skill);

                            $this->warn("moved", $skill, array(
                                "newParent" => $newParentUuid
                            ));

                            break;

                        case "copy":
                            $result = $skillManager->copy($skillUuid, $newParentUuid, $userUuid);
                            $json = new \Model\JsonResponse("ok", _("Skill copied!"));
                            $data = array();
                            $data['skill'] = $skill->getJsonData();
                            $data['parent'] = $newParent->getJsonData();

                            //send notification
                            //$notificationManager = new NotificationManager();
                            //$notificationManager->sendNotification("copy", $skill);

                            $json->setData($data);
                            break;
                    }
                        
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $data = array();
                    $data['skill'] = $skill->getJsonData();
                    $data['errors'] = $validator->getErrors();
                    $data['parent'] = $newParent->getJsonData();
                    $json->setData($data);
                }
            }        
            $json->send();
        }


        /**
         * Translate a skill
         */
        public function translateSkillAction(){

            SH::checkUsage(50);
            //lock is down there

            if (!empty($_POST)){

                $skillTrans = $_POST['skillTrans'];
                $languageCode = $_POST['language'];
                $skillUuid = $_POST['skillUuid'];

                SH::lock("creator", $skillUuid, "translate");

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillTrans);
                $validator->validateLanguageCode($languageCode);
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){

                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);

                    //if the translation is being made for english, rename the skill instead
                    if ($languageCode == \Config\Config::DEFAULT_LOCALE){
                        $previousName = $skill->getName();
                        $skill->setName($skillTrans);
                        $skillManager->update($skill, SH::getUser()->getUuid(), $previousName);
                        $this->warn("translated english version", $skill, array(
                            "translated in" => $languageCode,
                            "renamed to" => $skillTrans
                        ));
                    }
                    //else its a real translation
                    else {
                        $translationManager = new TranslationManager();

                        //insert or update, the same
                        $translationManager->saveSkillTranslation($languageCode, $skillTrans, $skill, false);

                        $this->warn("translated", $skill, array(
                            "translated in" => $languageCode,
                            "translation" => $skillTrans
                        ));
                    }

                    //send notification
                    $notificationManager = new NotificationManager();
                    $notificationManager->sendNotification("translate", $skill);

                    $json = new \Model\JsonResponse("ok", _("Translation saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $data = array();
                    $data["errors"] = $validator->getErrors();
                    $json->setData($data);
                    $json->send(); 
                }
            }
        }

        /**
         * Rename a skill
         */
        public function renameSkillAction(){

            SH::checkUsage(10);
            //lock is down there

            if (!empty($_POST)){

                $skillName = $_POST['skillName'];
                $skillUuid = $_POST['skillUuid'];
                
                SH::lock("creator", $skillUuid, "rename");

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);


                $parentSkill = $skillManager->findParent($skill);

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillUuid($skillUuid);
                $validator->validateUniqueChild($parentSkill->getUuid(), $skillName);

                if ($validator->isValid()){

                    $previousName = $skill->getName();
                    $user = SH::getUser();

                    //if the skill in not being renamed in english: 
                    if ($GLOBALS['lang'] != \Config\Config::DEFAULT_LOCALE){
                        $translationManager = new TranslationManager();

                        //insert or update, the same
                        $translationManager->saveSkillTranslation($GLOBALS['lang'], $skillName, $skill, false);

                        $this->warn("translated by rename", $skill, array(
                            "translated in" => $GLOBALS['lang'],
                            "translation" => $skillName
                        ));
                    }
                    //else rename the skill 
                    else {
                        $skill->setName( $skillName );
                        $skillManager->update($skill, $user->getUuid(), $previousName);

                        $this->warn("renamed", $skill, array(
                            "previous name" => $previousName,
                            "new name" => $skillName
                        ));
                    }


                    //send rename notification
                    $notificationManager = new NotificationManager();
                    $notificationManager->sendNotification("rename", $skill);

                    //reload skill
                    $skill = $skillManager->findByUuid($skill->getUuid());

                    $json = new \Model\JsonResponse("ok", _("Skill saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $data = array();
                    $data["errors"] = $validator->getErrors();
                    $json->setData($data);
                    $json->send(); 
                }
            }
        }


        /**
         * Search by keywords
         */
        public function skillSearchAction(){

            SH::checkUsage(120); //set high for autocomplete

            $skillManager = new SkillManager();
            $matches = $skillManager->search($_GET['q']);

            $results = array();
            foreach ($matches as $row) {

                $skill = new Skill($row['s']);
                $uuid = $skill->getUuid();
                if (array_key_exists($uuid, $results)){
                    continue;
                }
                $results[$uuid] = array(
                    "name" => $skill->getLocalName(),
                    "uuid" => $uuid,
                    "slug" => $skill->getSlug(),
                );
                if (empty($results[$uuid]['parent']) && !empty($row['p']->getProperty('name'))){
                    $parentSkill = new Skill($row['p']);
                    $results[$uuid]['parent'] = $parentSkill->getLocalName();
                }
                if (empty($results[$uuid]['gp']) && !empty($row['gp']->getProperty('name')) 
                        && $row['gp']->getProperty('name') != $row['p']->getProperty('name')){
                    $gpSkill = new Skill($row['gp']);
                    $results[$uuid]['gp'] = $gpSkill->getLocalName();
                }
            }

            $json = new \Model\JsonResponse();
            $json->setData($results);
            $json->send();
        }

        /**
         * Add a new skill
         */
        public function addSkillAction(){

            SH::checkUsage(20);
            SH::lock();

            if (!empty($_POST)){
                
                //post data
                $selectedSkillUuid = $_POST['selectedSkillUuid'];
                $skillName = $_POST['skillName'];
                $skillParentUuid = $_POST['skillParentUuid'];
                $creationType = $_POST['creationType'];

                //check rights here for create_as_parent
                //creating as parent...
                if ($selectedSkillUuid != $skillParentUuid){
                    $rights = SH::getRights(SH::getUser(), $selectedSkillUuid);
                    if (!in_array("create_as_parent", $rights)){
                        SH::forbid();
                    }
                }

                //retrieve parent skill
                $skillManager = new SkillManager();
                $parentSkill = $skillManager->findByUuid( $skillParentUuid );

                //validation
                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillUuid($selectedSkillUuid);
                $validator->validateSkillParentUuid($skillParentUuid);
                $validator->validateUniqueChild($skillParentUuid, $skillName);

                //if creating as child, check children number 
                //(do not check at all when creating as parent)
                if ($selectedSkillUuid == $skillParentUuid){

                    //--------------------------------------------------
                    //WARNING !!!
                    //Request new client to avoid strangest bug on earth
                    //--------------------------------------------------
                    \Model\DatabaseFactory::setNewClient();

                    $validator->validateNumChild($parentSkill);
                }
                
                if ($validator->isValid() && $parentSkill){

                    //retrieve current user uuid
                    $userUuid = SH::getUser()->getUuid();
                    
                    //get all Languages (for the translation <select>)
                    $lc = new \Model\LanguageCode();
                    $languages = $lc->getAllCodes("short");

                    $translationManager = new \Model\TranslationManager();
                    
                    //if the skill in not being created in english: 
                    if ($GLOBALS['lang'] != \Config\Config::DEFAULT_LOCALE){
                        //get the english version
                        $localeSkillName = $skillName;
                        $skillName = $translationManager->googleTranslate($localeSkillName, \Config\Config::DEFAULT_LOCALE, $GLOBALS['lang']);

                    }

                    //create the skill object in default lang
                    $skill = new Skill();
                    $skill->setNewUuid();
                    $skill->setName( $skillName );
                    $skill->setDepth( $parentSkill->getDepth() + 1 );
                    $skillManager->save($skill, $skillParentUuid, $userUuid);

                    //Refresh skill count on the client
                    // needs installs on windows
                    //\Utils\PushManager::pushSkillCount();

                    $translations = array();

                    //then auto translate
                    foreach($languages as $code){
                        //english is done already
                        if ($code == \Config\Config::DEFAULT_LOCALE || $code == "xl"){ continue; }

                        //this is the current language, and the skill was not added in english
                        if ($code == $GLOBALS['lang'] && isset($localeSkillName)){
                            //use user's name
                            $transSkillName = $localeSkillName;
                        }
                        //we are in english, translate from the user name, from english to code
                        elseif ($GLOBALS['lang'] == \Config\Config::DEFAULT_LOCALE) {
                            $transSkillName = $translationManager->googleTranslate($skillName, $code, $GLOBALS['lang']);
                        }
                        //we are not in english, translate from the user name, from his lang to code
                        elseif (isset($localeSkillName)) {
                            $transSkillName = $translationManager->googleTranslate($localeSkillName, $code, $GLOBALS['lang']);
                        }

                        if ($transSkillName){
                            $translations[$code] = $transSkillName;
                            $translationManager->saveSkillTranslation($code, $transSkillName, $skill, true);
                        }
                      
                    }

                    $notificationManager = new NotificationManager();

                    if($creationType == "parent") {
                        //right now, the new skill was added on the same level as the selected skill
                        //the new skill has a correct depth

                        //move the selected skill as child of newly created one
                        $skillManager->move($selectedSkillUuid, $skill->getUuid(), $userUuid);

                        //find the selected skill
                        $selectedSkill = $skillManager->findByUuid($selectedSkillUuid);
                        
                        //correct all depths
                        $skillManager->updateAllDepths();

                        //send add-parent notification
                        $notificationManager->sendNotification("add-parent", $skill, array(
                            "selectedSkill"     =>  $selectedSkill
                        ));
                    }

                    //as child
                    else {
                        $notificationManager->sendNotification("add-child", $skill, array(
                            "parentSkill"   =>  $parentSkill
                        ));
                    }

                    $infos = array_merge($translations, array(
                        "name" => $skillName,
                        "uuid" => $skill->getUuid()
                    ));

                    $this->warn("created and autotranslated", $skill, $infos);  
                    
                    $skill = $skillManager->findByUuid($skill->getUuid());

                    $json = new \Model\JsonResponse("ok", _("Skill saved!"));
                    $data = array();
                    $data['skill'] = $skill->getJsonData();
                    $data['parent'] = $parentSkill->getJsonData();
                    $json->setData($data);
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $data = array();
                    $data['errors'] = $validator->getErrors();
                    $data['parent'] = $parentSkill->getJsonData();
                    $json->setData($data);
                    $json->send();
                }
            }
        }

        /**
         * get JSON with JS translations
         */
        public function getJSTranslationsAction() {
            $jsTrans = new \l10n\JSTranslations;
            header("Content-type: application/javascript");
            echo "var jt = " . json_encode($jsTrans->getJSTranslations(), JSON_PRETTY_PRINT);
        }


        public function warn($type, Skill $skill, array $data = array()){
            
            $params = array(
                "type" => $type,
                "skill" => $skill,
                "data" => $data
            );

            $mailer = new Mailer();
            $mailer->sendWarning($params);


        }

        public function sendNotifications(Skill $skill, $postedMessage) {
            //Get owner's email for notification
            $skillOwner = $skill->getOwner();

            //Get emails of users who participated in the discussion
            $discussionMananager = new DiscussionManager();
            $skillUuid = $skill->getUuid();
            $usersInDiscussion = $discussionMananager->getUsersInDiscussion($skillUuid);

            $userManager = new UserManager();
            $currentUser = $userManager->findByUuid($_SESSION["user"]["uuid"]);

            $discussionData = array(
                "message"       => $postedMessage,
                "skill"         => $skill,
                "currentUser"   => $currentUser->getUsername()
            );

            $recipients = array();

            if ($currentUser->getEmail() != $skillOwner->getEmail()) {
                $recipients[] = array(
                    "type"          => "owner", 
                    "email"         => $skillOwner->getEmail(), 
                    "name"          => $skillOwner->getUsername(),
                    "siteLanguage"  => $skillOwner->getSiteLanguage()
                );
            }

            foreach($usersInDiscussion as $user) {
                if ($currentUser->getEmail() != $user->getEmail() &&    //Don't send the notification to the user who just sent commented (connected user)
                    $user->getEmail() != $skillOwner->getEmail())       //Don't send the notification to the user who created the skill (we already added him a few lines back)
                {
                    $recipients[] = array(
                        "type"          => "userInDiscussion", 
                        "email"         => $user->getEmail(), 
                        "name"          => $user->getUsername(),
                        "siteLanguage"  => $user->getSiteLanguage()
                    );

                }
            }

            $mailer = new Mailer();

            $mailer->sendDiscussNotifications($recipients, $discussionData);
        }


        /**
         * Edit skill children caps
         * !! If we add more settings, watch out below for the updateCaps() call
         */
        public function skillSettingsAction(){

            SH::lock("admin");
            SH::checkUsage(40);
            //lock is down there

            if (!empty($_POST)){

                $capIdealMax = $_POST['capIdealMax'];
                $capAlert = $_POST['capAlert'];
                $capNoMore = $_POST['capNoMore'];
                $skillUuid = $_POST['skillUuid'];
                
                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);

                if (!$skill){
                    SH::forbid();
                }

                $skill->setCapIdealMax($capIdealMax);
                $skill->setCapAlert($capAlert);
                $skill->setCapNoMore($capNoMore);

                $validator = new \Model\Validator();
                $validator->validateCaps($skill);

                if ($validator->isValid()){

                    $user = SH::getUser();

                    //watch out, update caps only
                    $skillManager->updateCaps($skill, $user->getUuid());

                    //reload skill
                    $skill = $skillManager->findByUuid($skill->getUuid());

                    $json = new \Model\JsonResponse("ok", _("Skill saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $data = array();
                    $data["errors"] = $validator->getErrors();
                    $json->setData($data);
                    $json->send(); 
                }
            }
        }

        /**
         * Retrieve the skill's history
         */
        public function skillHistoryAction(){
            SH::checkUsage(40);

            if (!empty($_GET)){
                $skillUuid = $_GET['skillUuid'];

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);

                if (!$skill){
                    SH::forbid();
                }

                $history = $skillManager->getSkillHistory($skillUuid);

                $view = new AjaxView("panels/skill-history-content.php", array(
                        "history"  => $history
                    ));
                $view->send();
            }
        }


        /**
         * Retrieve user notifications
         */
        public function userNotificationsAction(){

            SH::lock("admin");
            
            $user = SH::getUser();
            $notificationManager = new NotificationManager();
            $notifications = $notificationManager->getAllUserNotifications($user->getUuid());

            foreach($notifications as $notif){

                $wouldReceivedThat = $user->wantsEmailNotification($notif['notif']->getType(), $notif['reason']);
                echo ($wouldReceivedThat) ? "would be sent" : "would NOT be sent";
                echo "<br />";
               
                echo $notif['reason'] . "<br />";
                echo $notif['relatedSkill']->getName() . "<br />";
                echo "notif uuid: " . $notif['notif']->getUuid() . "<br />";
                echo $notif['notif']->getTimestamp() . "<br /><br />";
            }
        }

    }