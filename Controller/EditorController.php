<?php
    
    namespace Controller;

    use \View\EditorView;
    // use \View\AdminAjaxView;
    use \Model\SkillManager;
    use \Model\UserManager;
    use \Model\TranslationManager;
    use \Model\StatManager;
    use \Model\DiscussionManager;
    use \Utils\SecurityHelper as SH;

    class EditorController extends Controller {

        /**
         * Recent changes
         */
        public function editorDashboardAction(){

            SH::lock("admin");
            $params = array();

            $statManager = new StatManager();
            $discussionManager = new DiscussionManager();
            
            $params['title'] = "Editor Dashboard";

            $params['cappedSkills'] = array(
                "idealMax" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_IDEAL_MAX, "capIdealMax", \Config\Config::CAP_ALERT),
                "alert" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_ALERT, "alert", \Config\Config::CAP_NO_MORE),
                "noMore" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_NO_MORE, "noMore"),
            );

            $params['recentMessages'] = $discussionManager->getRecentMessages();

            $params['skillsCount']  = $statManager->countLabel("Skill");
            $params['latestChanges']= $statManager->getLatestChanges();
            $params['maxedSkills']  = $statManager->getMaxedSkills();

            $view = new EditorView("editor/editor_dashboard.php", $params);
            $view->send();
        }


    }