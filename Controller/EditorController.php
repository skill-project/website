<?php
    
    namespace Controller;

    use \View\EditorView;
    // use \View\AdminAjaxView;
    use \Model\SkillManager;
    use \Model\UserManager;
    use \Model\TranslationManager;
    use \Model\StatManager;
    use \Utils\SecurityHelper as SH;

    class EditorController extends Controller {

        /**
         * Recent changes
         */
        public function recentChangesAction(){

            SH::lock("admin");
            // $params = array();

            // $statManager = new StatManager();
            // $userManager = new UserManager();
            
            $params['title'] = "Editor Dashboard";

            // $params['skillsCount']  = $statManager->countLabel("Skill");
            // $params['usersCount']   = $statManager->countLabel("User");
            // $params['maxDepth']     = $statManager->getMaxDepth();
            // $params['latestChanges']= $statManager->getLatestChanges();
            // $params['maxedSkills']  = $statManager->getMaxedSkills();

            // $params['users'] = $userManager->findAll();

            //$params['meanNumber'] = $statManager->getMeanNumberOfSkillChildren();

            $view = new EditorView("recentChanges.php", $params);
            
            $view->send();
        }

    }