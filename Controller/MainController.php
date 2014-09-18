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

            $path = $skillManager->findNodePathToRoot($slug);
            $json = new \Model\JsonResponse();
            $json->setData($path);
            
            $view = new View("home.php", array(
                "rootNode"  => $rootNode,
                "title"     => "Home !",
                "action"    => "goto",
                "jsonAutoLoad"  => $json->getJson($path, false),
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


        /**
         * The project page
         */
        public function projectAction(){
            $view = new View("project.php", array("title" => "The Skill Project"));
            $view->setLayout("../View/layouts/page.php");
            $view->send();
        }


    }