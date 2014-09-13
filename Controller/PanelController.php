<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;
    use \Model\TranslationManager;

    class PanelController {

        /**
         * Show the create skill subpanel page
         */
        public function addSkillSubPanelAction(){
            $params = array();

            $skillManager = new SkillManager();
            $allSkillNodes = $skillManager->findAll();

            $params['skills'] = array();
            foreach($allSkillNodes as $node){
                $n = array(
                    'id'    => $node->getId(),
                    'name'  => $node->getProperty('name')
                );
                $params['skills'][] = $n;
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
        public function deleteSkillSubPanelAction($id){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findById($id);

            if (!$skill){ Router::fourofour(); }

            $params['skill'] = $skill;
            
            $view = new AjaxView("delete_skill_subpanel.php", $params);
            $view->send();
        }

    }