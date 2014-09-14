<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\Skill;

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

            $panelFile = ($user && $user->isAdmin()) ? "panel_admin" : "panel_user";
            $view = new AjaxView("$panelFile.php", $params);
            $view->send();
        }


        /**
         * Show the create skill subpanel page
         */
        public function addSkillSubPanelAction(){
            $params = array();

            $skillManager = new SkillManager();
            $allSkillNodes = $skillManager->findAll();

            $params['skills'] = array();
            foreach($allSkillNodes as $node){
                $skill = new Skill($node);
                $params['skills'][] = $skill;
            }

            $view = new AjaxView("add_skill_subpanel.php", $params);
            $view->send();
        }

        /**
         *  Show the rename subpanel page 
        */
        public function renameSkillSubPanelAction($uuid){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findByUuid($uuid);

            if (!$skill){ Router::fourofour(); }

            $params['skill'] = $skill;
            $revisions = $skillManager->findRevisionHistory($skill);

            //distinct names only
            $params['previousNames'] = array();
            foreach($revisions as $rev){
                if (!in_array($rev['previousName'], $params['previousNames']) &&
                        $rev['previousName'] != $skill->getName()){
                    $params['previousNames'][] = $rev['previousName'];
                }
            }

            $view = new AjaxView("rename_skill_subpanel.php", $params);
            $view->send();
        }


        /**
         *  Show the translate subpanel page 
        */
        public function translateSkillSubPanelAction($uuid){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findByUuid($uuid);

            if (!$skill){ Router::fourofour(); }

            $params['skill'] = $skill;
            
            //get all Languages (for the <select>)
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

            $view = new AjaxView("translate_skill_subpanel.php", $params);
            $view->send();
        }

        /**
         * Show delete subpanel page
         */
        public function deleteSkillSubPanelAction($uuid){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findByUuid($uuid);

            if (!$skill){ Router::fourofour(); }

            $params['skill'] = $skill;
            
            $view = new AjaxView("delete_skill_subpanel.php", $params);
            $view->send();
        }

    }