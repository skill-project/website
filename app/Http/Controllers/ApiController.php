<?php
    
    namespace App\Http\Controllers;

    use App\Model\SkillManager;
    use App\Model\TranslationManager;
    use App\Model\DiscussionManager;
//    use App\Model\UserManager;
    use App\Model\NotificationManager;
    use App\Model\Skill;
    use App\Model\User;
    use App\Helpers\SecurityHelper as SH;
    use App\Model\UserManager;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Session;
    use \l10n\JSTranslations;
    use Psy\Util\Json;
    use \View\AjaxView;
    use App\Model\DatabaseFactory;
    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;
    use App\Model\JsonResponse;
    use App\Model\CustomValidator;
    use App\Model\LanguageCode;


    class ApiController extends Controller {
        
        /**
         * get the root "Skills" node
         */
        public function getRootNodeAction(){

            SH::checkUsage(10);

            $skillManager = new SkillManager();
            $skill = $skillManager->findRootNode();

            $json = new JsonResponse();
            $json->setData($skill->getJsonData());
            $json->send();

        }


        /**
         * get first level children of a node, by its uuid
         * @param string Parent uuid
         */
        public function getNodeChildrenAction($uuid){

//            SH::checkUsage(30);

            $skillManager = new SkillManager();
            $data = $skillManager->findChildren($uuid);

            if ($data){
                $json = new JsonResponse();
                $json->setData($data);
            }
            else {
                $json = new JsonResponse("ok", "No more children");
            }

            $json->send();

        }

        /**
         * Returns node parent
         * 
         * @param int $uuid
         */
        public function getNodeParentAction($uuid){

            SH::checkUsage(30);

            $skillManager = new SkillManager();
            $resultSet = $skillManager->findParentAndGrandParent($uuid);
            
            $ancestorsFound = $resultSet->count();
            if ($ancestorsFound == 0){
                $json = new JsonResponse("error", "No parent found");
                $json->send();
            }
            else if ($ancestorsFound >= 1){
                $parentNode = $resultSet[0]['parent'];
                $skill = new Skill( $parentNode );
            }

            $json = new JsonResponse();
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

            $json = new JsonResponse();
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

            $json = new JsonResponse();
            $json->setData($path);
            $json->send();

        }

        /**
         * Deletes a node
         * @todo handle response correctly
         * @param string $uuid
         */
        public function deleteSkillAction(Request $request){
            SH::checkUsage(5);
            //lock is down there

            $deletionResult = false;

            if (!empty($_POST)){

                $skillUuid = $_POST['skillUuid'];

                SH::lock("creator", $skillUuid, "delete", $request);

                $validator = new CustomValidator();
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){
                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);
                    $deletionResult = $skillManager->deleteSkill($skillUuid, SH::getUser($request)->getUuid());
                }
            }

            if ($deletionResult === true){
                $this->warn("deleted", $skill);

                //send notification
                $notificationManager = new NotificationManager();
                $notificationManager->sendNotification("delete", $skill);

                $json = new JsonResponse("ok", _("Node deleted."));
            }
            else {
                $json = new JsonResponse("error", $deletionResult);
            }
            $json->send();

        }


        /**
         * Add a comment on a skill
         */
        public function discussSkillAction(Request $request){

            //lock 
            SH::checkUsage(60);
            SH::lock($request);

            if (!empty($_POST)){
                $skillUuid = $_POST['skillUuid'];

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);

                $message = $_POST['message'];
                // $topic = $_POST['topic'];

                $validator = new CustomValidator();
                $validator->validateSkillUuid($skillUuid);
                $validator->validateMessage($message);
                // $validator->validateMessageTopic($topic);

                if ($validator->isValid()){

                    $discussionMananager = new DiscussionManager();
                    $result = $discussionMananager->saveNewMessage($skillUuid, null, $message);      
                    if ($result){
                        $json = new JsonResponse("ok", _("Message posted!"));
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
                        $json = new JsonResponse("error", _("Error posting message."));
                    }
                    
                }
                else {
                    $json = new JsonResponse("error", _("An error occured."));
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
        public function moveSkillAction(Request $request){
            
            SH::checkUsage(10);
            //lock is down there

            if (!empty($_POST)){
                $skillUuid = $_POST['selectedSkillUuid'];

                SH::lock("creator", $skillUuid, "move", $request);

                $skillManager = new SkillManager();
                $newParentUuid = $_POST['destinationUuid'];
                $type = $_POST['moveType'];
                $skill = $skillManager->findByUuid($skillUuid);
                $newParent = $skillManager->findByUuid($newParentUuid);
                
                //retrieve current user uuid
                $userUuid = SH::getUser($request)->getUuid();

                $validator = new CustomValidator();
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

                            $json = new JsonResponse("ok", _("Skill moved!"));
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
                            $json = new JsonResponse("ok", _("Skill copied!"));
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
                    $json = new JsonResponse("error", _("Something went wrong."));
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
        public function translateSkillAction(Request $request){

            SH::checkUsage(50);
            //lock is down there

            if (!empty($_POST)){

                $skillTrans = $_POST['skillTrans'];
                $languageCode = $_POST['language'];
                $skillUuid = $_POST['skillUuid'];

                SH::lock("creator", $skillUuid, "translate",$request);

                $validator = new CustomValidator();
                $validator->validateSkillName($skillTrans);
                $validator->validateLanguageCode($languageCode);
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){

                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);

                    //if the translation is being made for english, rename the skill instead
                    if ($languageCode == 'en'){
                        $previousName = $skill->getName();
                        $skill->setName($skillTrans);
                        $skillManager->updateSkill($skill, SH::getUser($request)->getUuid(), $previousName);
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

                    $json = new JsonResponse("ok", _("Translation saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new JsonResponse("error", _("Something went wrong."));
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
        public function renameSkillAction(Request $request){

            SH::checkUsage(10);
            //lock is down there

            if (!empty($_POST)){

                $skillName = $_POST['skillName'];
                $skillUuid = $_POST['skillUuid'];
                
                SH::lock("creator", $skillUuid, "rename", $request);

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);


                $parentSkill = $skillManager->findParent($skill);

                $validator = new CustomValidator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillUuid($skillUuid);
                $validator->validateUniqueChild($parentSkill->getUuid(), $skillName);

                if ($validator->isValid()){

                    $previousName = $skill->getName();
                    $user = SH::getUser($request);

                    //if the skill in not being renamed in english: 
                    if (env('lang') != env('lang')){
                        $translationManager = new TranslationManager();

                        //insert or update, the same
                        $translationManager->saveSkillTranslation(env('lang'), $skillName, $skill, false);

                        $this->warn("translated by rename", $skill, array(
                            "translated in" => env('lang'),
                            "translation" => $skillName
                        ));
                    }
                    //else rename the skill 
                    else {
                        $skill->setName( $skillName );
                        $skillManager->updateSkill($skill, $user->getUuid(), $previousName);

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

                    $json = new JsonResponse("ok", _("Skill saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new JsonResponse("error", _("Something went wrong."));
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

            $json = new JsonResponse();
            $json->setData($results);
            $json->send();
        }

        /**
         * Add a new skill
         */
        public function addSkillAction(Request $request){

//            var_dump("here");
//            die;
//

            SH::checkUsage(20);
            SH::lock("",null,"",$request);

            if (!empty($_POST)){

                //post data
                $selectedSkillUuid = $_POST['selectedSkillUuid'];
                $skillName = $_POST['skillName'];
                $skillParentUuid = $_POST['skillParentUuid'];
                $creationType = $_POST['creationType'];

                //check rights here for create_as_parent
                //creating as parent...
                if ($selectedSkillUuid != $skillParentUuid){
                    $rights = SH::getRights(SH::getUser($request), $selectedSkillUuid);
                    if (!in_array("create_as_parent", $rights)){
                        SH::forbid();
                    }
                }

                //retrieve parent skill
                $skillManager = new SkillManager();
                $parentSkill = $skillManager->findByUuid( $skillParentUuid );

                //validation
                $validator = new CustomValidator();
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
                    DatabaseFactory::setNewClient();


                    $validator->validateNumChild($parentSkill);
                }
                
                if ($validator->isValid() && $parentSkill){
                    //retrieve current user uuid
                    $userUuid = SH::getUser($request)->getUuid();
                    
                    //get all Languages (for the translation <select>)
                    $lc = new LanguageCode();
                    $languages = $lc->getAllCodes("short");

                    $translationManager = new TranslationManager();
                    
                    //if the skill in not being created in english: 
                    if (env('lang') != 'en'){
                        //get the english version
                        $localeSkillName = $skillName;
                        $skillName = $translationManager->googleTranslate($localeSkillName, 'en', env('lang'));
                    }

                    //create the skill object in default lang
                    $skill = new Skill();
                    $skill->setNewUuid();
                    $skill->setName( $skillName );
                    $skill->setDepth( $parentSkill->getDepth() + 1 );
                    $skillManager->saveSkill($skill, $skillParentUuid, $userUuid);

                    //Refresh skill count on the client
                    // needs installs on windows
                    //\Utils\PushManager::pushSkillCount();

                    $translations = array();

                    //then auto translate
                    foreach($languages as $code){
                        //english is done already
                        if ($code == env('lang') || $code == "xl"){ continue; }

                        //this is the current language, and the skill was not added in english
                        if ($code == env('lang') && isset($localeSkillName)){
                            //use user's name
                            $transSkillName = $localeSkillName;
                        }
                        //we are in english, translate from the user name, from english to code
                        elseif (env('lang') == env('lang')) {
                            $transSkillName = $translationManager->googleTranslate($skillName, $code, env('lang'));
                        }
                        //we are not in english, translate from the user name, from his lang to code
                        elseif (isset($localeSkillName)) {
                            $transSkillName = $translationManager->googleTranslate($localeSkillName, $code, env('lang'));
                        }

                        if ($transSkillName){
                            $translations[$code] = $transSkillName;
                            $translationManager->saveSkillTranslation($code, $transSkillName, $skill, true, $request);
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

                    $json = new JsonResponse("ok", _("Skill saved!"));
                    $data = array();
                    $data['skill'] = $skill->getJsonData();
                    $data['parent'] = $parentSkill->getJsonData();
                    $json->setData($data);
                    $json->send();
                }
                else {
                    $json = new JsonResponse("error", _("Something went wrong."));
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
//            $jsTrans = new JSTranslations();
            header("Content-type: application/javascript");
            $jt_arr = array(
//                "currentLang"   => $GLOBALS["lang"],
                "currentLang"   => env('lang'),
                "or"    => _("or"),

                "error" => _("An error occurred"),
                "ok"    => _("Ok"),

                "panel" => array(
                    "haveToBeSigned"    => _("You have to be signed in to do that!"),
                    "signIn"            => _("Sign in"),
                    "createAccount"     => _("Create an account"),
                    "capIdealMax"       => _("The new skill has been created but for the tree of skills to remain simple, only <strong>%%%IDEAL%%%&nbsp;skills</strong> should be added to <strong>\"%%%PARENTNAME%%%\"</strong>. Please start thinking of a way to group the skills."),
                    "capAlert"          => _("It's getting crowded here! Only <strong>%%%IDEAL%%%&nbsp;skills</strong> should be added to <strong>\"%%%PARENTNAME%%%\"</strong>. Please start thinking of a way to group the skills. You will not be able to add more than <strong>%%%NOMORE%%%&nbsp;skills</strong>."),
                    "capNoMore"         => _("Oh dear! This is the last skill you can add to <strong>\"%%%PARENTNAME%%%\"</strong>. You have reached the hard limit of <strong>%%%NOMORE%%%&nbsp;skills</strong> (ideal maximum:&nbsp;<strong>%%%IDEAL%%%</strong>). Please think of a way to group the skills."),

                    "capsDiscuss"       => _("If you think this limit is too low, please explain why in the \"Discuss\" panel and an Editor will raise it if appropriate."),
                ),

                "footer" => array(
                    "searchPlaceholder" => _("SEARCH A SKILL (%s)")
                )
            );
            echo "var jt = " . json_encode($jt_arr, JSON_PRETTY_PRINT);
        }

        /**
         * @todo: MAILER CONFIGURATIONS
         * @param $type
         * @param Skill $skill
         * @param array $data
         */
        public function warn($type, Skill $skill, array $data = array()){
            
            $params = array(
                "type" => $type,
                "skill" => $skill,
                "data" => $data
            );

//            $mailer = new Mailer();
//            $mailer->sendWarning($params);


        }

        public function sendNotifications(Skill $skill, $postedMessage) {
            //Get owner's email for notification
            $skillOwner = $skill->getOwner();

            //Get emails of users who participated in the discussion
            $discussionMananager = new DiscussionManager();
            $skillUuid = $skill->getUuid();
            $usersInDiscussion = $discussionMananager->getUsersInDiscussion($skillUuid);

            $userManager = new UserManager();
            $currentUser = $userManager->findByUuid(Session::get('user')['uuid']);

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
        public function skillSettingsAction(Request $request){

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

                $validator = new CustomValidator();
                $validator->validateCaps($skill);
                if ($validator->isValid()){

                    $user = SH::getUser($request);
                    //watch out, update caps only
                    $skillManager->updateCaps($skill, $user->getUuid());

                    //reload skill
                    $skill = $skillManager->findByUuid($skill->getUuid());

                    $json = new JsonResponse("ok", _("Skill saved!"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new JsonResponse("error", _("Something went wrong."));
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
                return view('panels.skill-history-content', ['history'=>$history]);
//                $view = new AjaxView("panels/skill-history-content.blade.php", array(
//                        "history"  => $history
//                    ));
//                $view->send();
            }
        }


        /**
         * Retrieve user notifications
         */
        public function userNotificationsAction(Request $request){

            SH::lock("admin");

            $user = SH::getUser($request);
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

        /**
         * The contact page
         */
        public function contactAction(Request $request){

            $params = array(
                "title" => _("Contact us"),
                "email" => "",
                "realName" => "",
                "message" => ""
            );

            $params['contact_message_sent'] = false;
            if (Session::has('contact_message_sent')){
                $request->session()->forget('contact_message_sent');
                $params['contact_message_sent'] = true;
            }

            //to prefill the form
            if ($user = SH::getUser($request)){
                $params['email'] = $user->getEmail();
            }

            if (!empty($_POST)){
                $params['email'] = SH::safe($_POST['email']);
                $params['realName'] = SH::safe($_POST['real_name']);
                $params['message'] = SH::safe($_POST['message']);

                $validator = new CustomValidator();
                $validator->validateMessage($params['message']);
                $validator->validateEmail($params['email']);

                if ($validator->isValid()){
                    //send mail to us

                    $mailer = new Mailer();
                    if ($mailer->sendContactMessage($params)[0]['reject_reason'] ==  null){
                        $request->session()->put('contact_message_sent',true);
                        Session::save();
                        $mailer->sendContactMessageConfirmation($params);
                        return redirect()->to('/contact');
                    }
                    else {
                        $validator->addError("global", _("A problem occurred while sending your message. Please try again!"));
                    }
                }

                if ($validator->hasErrors()){
                    $params["errors"] = $validator->getErrors();
                }
            }
            return view('pages.contact',['params'=>$params]);
//            $view = new View("contact.php", $params);
//            $view->send();
        }

    }