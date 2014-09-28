<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\DiscussionManager;
    use \Model\Skill;
    use \Utils\SecurityHelper as SH;

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
            SH::lock("admin");

            $deletionResult = false;

            if (!empty($_POST)){

                $skillUuid = $_POST['skillUuid'];

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){
                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);
                    $deletionResult = $skillManager->delete($skillUuid);
                }
            }

            if ($deletionResult === true){
                $this->warn("deleted", $skill);
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
                $message = $_POST['message'];
                $topic = $_POST['topic'];

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);
                $validator->validateMessage($message);
                $validator->validateMessageTopic($topic);

                if ($validator->isValid()){

                    $discussionMananager = new DiscussionManager();
                    $result = $discussionMananager->saveNewMessage($skillUuid, $topic, $message);      
                    if ($result){
                        $json = new \Model\JsonResponse("ok", _("Message posted !"));
                        $skillManager = new SkillManager();
                        $skill = $skillManager->findByUuid($skillUuid);
                        $this->warn("discussed", $skill, array(
                            "message" => $message
                        ));
                    }
                    else {
                        $json = new \Model\JsonResponse("error", _("Error posting message."));
                    }
                    
                }
                else {
                    $json = new \Model\JsonResponse("error", _("An error occured."));
                    $json->setData($validator->getErrors());
                }      

            }
            $json->send();

        }


        /**
         * Move or duplicate a skill
         */
        public function moveSkillAction(){
            
            SH::checkUsage(10);
            SH::lock("admin");

            if (!empty($_POST)){
                $skillManager = new SkillManager();

                $skillUuid = $_POST['selectedSkillUuid'];
                $newParentUuid = $_POST['destinationUuid'];
                $type = $_POST['moveType'];
                $skill = $skillManager->findByUuid($skillUuid);
                
                //retrieve current user uuid
                $userUuid = SH::getUser()->getUuid();

                $validator = new \Model\Validator();
                $validator->validateSkillUuid($skillUuid);
                $validator->validateSkillUuid($newParentUuid);
                $validator->validateUniqueChild($newParentUuid, $skill->getName());
                $validator->validateNumChild($newParentUuid);

                if ($validator->isValid()){

                    switch($type){
                        case "move":
                            $result = $skillManager->move($skillUuid, $newParentUuid, $userUuid);

                            //correct all depths
                            $skillManager->updateAllDepths();

                            $json = new \Model\JsonResponse("ok", _("Skill moved !"));

                            $this->warn("moved", $skill, array(
                                "newParent" => $newParentUuid
                            ));

                            break;

                        case "copy":
                            $result = $skillManager->copy($skillUuid, $newParentUuid, $userUuid);
                            $json = new \Model\JsonResponse("ok", _("Skill copied !"));
                            break;
                    }
                        
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $json->setData($validator->getErrors());
                }
            }        
            $json->send();
        }


        /**
         * Translate a skill
         */
        public function translateSkillAction(){

            SH::checkUsage(50);
            SH::lock("admin");

            if (!empty($_POST)){

                $skillTrans = $_POST['skillTrans'];
                $languageCode = $_POST['language'];
                $skillUuid = $_POST['skillUuid'];

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillTrans);
                $validator->validateLanguageCode($languageCode);
                $validator->validateSkillUuid($skillUuid);

                if ($validator->isValid()){

                    $skillManager = new SkillManager();
                    $skill = $skillManager->findByUuid($skillUuid);

                    $translationManager = new TranslationManager();

                    //insert or update ?
                    $previousTranslationNode = $translationManager->findSkillTranslationInLanguage($skill, $languageCode);
                    
                    //insert
                    if (!$previousTranslationNode){
                        $translationManager->insertSkillTranslation($languageCode, $skillTrans, $skill);
                    }
                    //update
                    else {
                        $translationManager->updateSkillTranslation($skillTrans, $previousTranslationNode);
                    }

                    $this->warn("translated", $skill, array(
                        "translated in" => $languageCode,
                        "translation" => $skillTrans
                    ));

                    $json = new \Model\JsonResponse("ok", _("Translation saved !"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $json->setData($validator->getErrors());
                    $json->send(); 
                }
            }
        }

        /**
         * Rename a skill
         */
        public function renameSkillAction(){

            SH::checkUsage(10);
            SH::lock("admin");

            if (!empty($_POST)){

                $skillName = $_POST['skillName'];
                $skillUuid = $_POST['skillUuid'];

                $skillManager = new SkillManager();
                $skill = $skillManager->findByUuid($skillUuid);
                $parentSkill = $skillManager->findParent($skill);

                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillUuid($skillUuid);
                $validator->validateUniqueChild($parentSkill->getUuid(), $skillName);

                if ($validator->isValid()){

                    $previousName = $skill->getName();
                    $skill->setName( $skillName );

                    $user = SH::getUser();

                    $skillManager->update($skill, $user->getUuid(), $previousName);

                    $this->warn("renamed", $skill, array(
                        "previous name" => $previousName,
                        "new name" => $skillName
                    ));

                    $json = new \Model\JsonResponse("ok", _("Skill saved !"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $json->setData($validator->getErrors());
                    $json->send(); 
                }
            }
        }


        /**
         * Search by keywords
         */
        public function skillSearchAction(){

            SH::checkUsage(120); //set high for autocomplete

            $cyp = "MATCH (gp:Skill)-[:HAS*0..1]->(p:Skill)-[:HAS]->(s:Skill)
                    WHERE s.name =~ {keywords}
                    RETURN s,gp,p LIMIT 10";
            
            $eachWords = explode(" ", addslashes(trim(urldecode($_GET['q']))));
            $regexp = "(?i).*";
            foreach($eachWords as $word){
                $regexp .= $word . ".*";
            }

            $query = new Query($this->client, $cyp, array("keywords" => $regexp));
            $matches = $query->getResultSet();

            $results = array();
            foreach ($matches as $row) {
                $uuid = $row['s']->getProperty("uuid");
                if (array_key_exists($uuid, $results)){
                    continue;
                }
                $results[$uuid] = array(
                    "name" => $row['s']->getProperty("name"),
                    "uuid" => $uuid,
                    "slug" => $row['s']->getProperty("slug"),
                );
                if (empty($results[$uuid]['parent']) && !empty($parent = $row['p']->getProperty('name'))){
                    $results[$uuid]['parent'] = $parent;
                }
                if (empty($results[$uuid]['gp']) && !empty($gp = $row['gp']->getProperty('name')) && $gp != $parent){
                    $results[$uuid]['gp'] = $gp;
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

                //retrieve parent skill
                $skillManager = new SkillManager();
                $parentSkill = $skillManager->findByUuid( $skillParentUuid );

                //validation
                $validator = new \Model\Validator();
                $validator->validateSkillName($skillName);
                $validator->validateSkillUuid($selectedSkillUuid);
                $validator->validateSkillParentUuid($skillParentUuid);
                $validator->validateUniqueChild($skillParentUuid, $skillName);
                $validator->validateNumChild($skillParentUuid);
                
                if ($validator->isValid() && $parentSkill){

                    //retrieve current user uuid
                    $userUuid = SH::getUser()->getUuid();
                    
                    //create the skill object
                    $skill = new Skill();
                    $skill->setNewUuid();
                    $skill->setName($skillName);
                    $skill->setDepth( $parentSkill->getDepth() + 1 );
                    $skillManager->save($skill, $skillParentUuid, $userUuid);


                    $this->warn("created", $skill, array(
                        "name" => $skillName,
                        "uuid" => $skill->getUuid()
                    ));

                    if($creationType == "parent") {
                        //right now, the new skill was added on the same level as the selected skill
                        //the new skill has a correct depth

                        //move the selected skill as child of newly created one
                        $skillManager->move($selectedSkillUuid, $skill->getUuid(), $userUuid);

                        //find the selected skill
                        $selectedSkill = $skillManager->findByUuid($selectedSkillUuid);
                        
                        //correct all depths
                        $skillManager->updateAllDepths();
                    }
                    

                    $json = new \Model\JsonResponse("ok", _("Skill saved !"));
                    $json->setData($skill->getJsonData());
                    $json->send();
                }
                else {
                    $json = new \Model\JsonResponse("error", _("Something went wrong."));
                    $json->setData($validator->getErrors());
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


        public function warn($type, Skill $skill, array $data){
            $content = $skill->getName() . " (". $skill->getUuid() .") " . _(" has been $type.");

            foreach($data as $key => $value){
                $content .= "<br />$key : $value";
            }

            if ($user = SH::getUser()){
                $content .= "<br /><br />User : " . $user->getUsername();
            }

            $mailer = new Mailer();
            $mailer->sendWarning($content, $type);


        }

    }