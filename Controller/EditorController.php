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
            // $params['latestChanges']= $statManager->getLatestChanges();

            $view = new EditorView("editor/editor_dashboard.php", $params);
            $view->send();
        }

        public function recentActivitiesTabAction(){
            SH::lock("admin");
            $params = array();

            $statManager = new StatManager();
            
            if (!empty($_GET["limit"]) && !empty($_GET["skip"])) {
                $limit = $_GET["limit"];
                $skip = $_GET["skip"];
            }else {
                $limit = 20;
                $skip = 0;
            }

            $params['latestChanges'] = $statManager->getLatestChanges($limit, $skip);
            $params['route'] = \Controller\Router::url("editorDashboardRecentActivities", array(), true); 
            $params['nextSkip'] = $skip + $limit;
            $params['nextLimit'] = $limit;

            $view = new AjaxView("pages/editor/tabs/recent_activities.php", $params);
            $view->send();
        }

        public function recentDiscussionsTabAction(){
            SH::lock("admin");
            $params = array();

            $discussionManager = new DiscussionManager();

             if (!empty($_GET["limit"]) && !empty($_GET["skip"])) {
                $limit = $_GET["limit"];
                $skip = $_GET["skip"];
            }else {
                $limit = 50;
                $skip = 0;
            }
            
            $params['recentMessages'] = $discussionManager->getRecentMessages($limit, $skip);
            $params['route'] = \Controller\Router::url("editorDashboardRecentDiscussions", array(), true); 
            $params['nextSkip'] = $skip + $limit;
            $params['nextLimit'] = $limit;

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