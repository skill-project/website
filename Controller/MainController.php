<?php
    
    namespace Controller;

    use \View\View;
    use \Model\SkillManager;

    class MainController extends Controller {

        /**
         * Home page
         */
        public function homeAction(){
            $skillManager = new SkillManager();

            $rootNode = $skillManager->findRootNode();
            $view = new View("home.php", array(
                "rootNode" => $rootNode,
                "title" => "Home !")
            );

            $view->send();
        }

        /**
         * goTo a specific skill
         */
        public function goToAction($slug){
            $skillManager = new SkillManager();

            $rootNode = $skillManager->findRootNode();
            $view = new View("home.php", array(
                "rootNode"  => $rootNode,
                "title"     => "Home !",
                "action"    => "goto",
                "skillManager"  => $skillManager,
                "slug"      => $slug)
            );

            $view->send();
        }

        /**
         * Debug page
         */
        public function debugAction(){
            $view = new View("debug.php", array("title" => "Debug Station"));
            $view->setLayout("../View/layouts/debug.php");
            $view->send();
        }


    }