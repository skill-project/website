<?php

    namespace Controller;

    use \View\AjaxView;
    use \Model\SkillManager;

    class PanelController {

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

    }