<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;

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
        public function renameSkillSubPanelAction($id){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findById($id);

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
         * Show delete subpanel page
         */
        public function deleteSkillSubPanelAction($id){
            $params = array();

            $skillManager = new SkillManager();
            $skill = $skillManager->findById($id);

            $params['skill'] = $skill;
            
            $view = new AjaxView("delete_skill_subpanel.php", $params);
            $view->send();
        }

    }