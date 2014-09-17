<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\Skill;
    use \Model\DiscussionManager;

    class PanelController {

        /**
         * Show the first-level panel
         */
        public function getPanelAction($uuid){

            $params = array();
            $user = \Utils\SecurityHelper::getUser();

            $skillManager = new SkillManager();
            $skill = $skillManager->findByUuid($uuid);
            $params['skill'] = $skill;

            //parent, for skill creation
            $params['parent'] = $skillManager->findParent($skill);

            //previous names
            $revisions = $skillManager->findRevisionHistory($skill);

                //distinct names only
                $params['previousNames'] = array();
                foreach($revisions as $rev){
                    if (!in_array($rev['previousName'], $params['previousNames']) &&
                            $rev['previousName'] != $skill->getName()){
                        $params['previousNames'][] = $rev['previousName'];
                    }
                }

            //get discussion topics
            $discussionManager = new DiscussionManager();
            $params["topics"] = $discussionManager->getTopics();

            //get previous messages
            $params['messages'] = $discussionManager->getSkillMessages($skill->getUuid());

            //get all Languages (for the translation <select>)
            $lc = new \Model\LanguageCode();
            $languages = $lc->getAllCodes();
            $params['languages'] = $languages;

            //get previous translations
            $translationManager = new TranslationManager();
            $translations = $translationManager->findSkillTranslations($skill);
            for($i=0;$i<count($translations);$i++){
                $translations[$i]['languageNames'] = $lc->getNames($translations[$i]['languageCode']);
            }

            $params['translations'] = $translations;

            $panelFile = ($user && $user->isAdmin()) ? "panel_admin" : "panel_user";
            $view = new AjaxView("$panelFile.php", $params);
            $view->send();
        }

        /**
         * Retrieves and send the discussion about a skill
         */
        public function reloadDiscussionMessagesAction($uuid){
            $params = array();
            $discussionManager = new DiscussionManager();
            $params['messages'] = $discussionManager->getSkillMessages($uuid);
            $view = new AjaxView("discussion-messages.php", $params);
            $view->send();
        }

    }