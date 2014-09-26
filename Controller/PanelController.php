<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\Skill;
    use \Model\DiscussionManager;

    class PanelController {

        /**
         * Get the panel
         * @param string The selected skill uuid
         */
        public function getPanelAction($uuid){

            $params = array();
            $user = \Utils\SecurityHelper::getUser();

            //retrieve the selected skill
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
                    //creation name
                    if (empty($rev['previousName'])){
                        //$params['previousNames'][]
                    }
                    elseif (!in_array($rev['previousName'], $params['previousNames']) &&
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
            $translations = $translationManager->findSkillTranslations($skill->getUuid());
            for($i=0;$i<count($translations);$i++){
                $translations[$i]['languageNames'] = $lc->getNames($translations[$i]['languageCode']);
            }

            $params['translations'] = $translations;

            $panelFile = ($user && $user->isAdmin()) ? "panel_admin" : "panel_user";

            $view = new AjaxView("panels/$panelFile.php", $params);
            $view->send();
        }

        /**
         * Retrieves and send the discussion about a skill
         */
        public function reloadDiscussionMessagesAction($uuid){
            $params = array();
            $discussionManager = new DiscussionManager();
            $params['messages'] = $discussionManager->getSkillMessages($uuid);
            $view = new AjaxView("panels/discussion-messages.php", $params);
            $view->send();
        }

        /**
         * Retrieves and send the translations of a skill
         */
        public function reloadTranslationsAction($uuid){
            $params = array();
            $translationManager = new TranslationManager();
            $lc = new \Model\LanguageCode();
            $translations = $translationManager->findSkillTranslations($uuid);
            for($i=0;$i<count($translations);$i++){
                $translations[$i]['languageNames'] = $lc->getNames($translations[$i]['languageCode']);
            }

            $params['translations'] = $translations;
            $view = new AjaxView("panels/skill-translations.php", $params);
            $view->send();
        }

    }