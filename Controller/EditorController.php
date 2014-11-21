<?php
    
    namespace Controller;

    use \View\EditorView;
    use \View\AjaxView;
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

            $params['title'] = "Editor Dashboard";

            $statManager = new StatManager();
            $params['latestChanges']= $statManager->getLatestChanges();

            $view = new EditorView("editor/editor_dashboard.php", $params);
            $view->send();
        }

        public function recentActivitiesTabAction(){
            SH::lock("admin");
            $params = array();

            $statManager = new StatManager();
            
            $params['latestChanges']= $statManager->getLatestChanges();

            $view = new AjaxView("pages/editor/tabs/recent_activities.php", $params);
            $view->send();
        }

        public function recentDiscussionsTabAction(){
            SH::lock("admin");
            $params = array();

            $discussionManager = new DiscussionManager();
            
            $params['recentMessages'] = $discussionManager->getRecentMessages();

            $view = new AjaxView("pages/editor/tabs/recent_discussions.php", $params);
            $view->send();
        }


        public function oversizedSkillsTabAction(){
            SH::lock("admin");
            $params = array();

            
            $params['cappedSkills'] = $this->getCappedSkills();

            $view = new AjaxView("pages/editor/tabs/oversized_skills.php", $params);
            $view->send();
        }

        private function getCappedSkills(){
            $statManager = new StatManager();
            $skills = array(
                "idealMax" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_IDEAL_MAX, "capIdealMax", \Config\Config::CAP_ALERT),
                "alert" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_ALERT, "alert", \Config\Config::CAP_NO_MORE),
                "noMore" => $statManager->getMaxedSkillsByCap(\Config\Config::CAP_NO_MORE, "noMore"),
            );
            return $skills;
        }


    }