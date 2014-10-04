<?php
    
    namespace Controller;

    use \View\AdminView;
    use \Model\SkillManager;
    use \Model\StatManager;
    use \Utils\SecurityHelper as SH;

    class AdminController extends Controller {

        /**
         * Home page
         */
        public function statsAction(){

            SH::lock("superadmin");
            $params = array();

            $statManager = new StatManager();
            
            $params['title'] = "Statshit";

            $params['skillsCount'] = $statManager->countLabel("Skill");
            $params['usersCount'] = $statManager->countLabel("User");
            $params['maxDepth'] = $statManager->getMaxDepth();
            //$params['meanNumber'] = $statManager->getMeanNumberOfSkillChildren();

            $view = new AdminView("stats.php", $params);
            
            $view->send();
        }


    }