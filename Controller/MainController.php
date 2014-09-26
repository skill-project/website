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
         * The graph
         */
        public function graphAction(){

            $skillManager = new SkillManager();
            $rootNode = $skillManager->findRootNode();
            
            $view = new View("graph.php", array(
                "rootNode" => $rootNode,
                "title" => "Home !")
            );
            $view->setLayout("../View/layouts/graph.php");
            $view->send();
        }

        /**
         * goTo a specific skill
         */
        public function goToAction($slug){
            $skillManager = new SkillManager();

            $rootNode = $skillManager->findRootNode();

            $uuid = $skillManager->getUuidFromSlug($slug);
            $path = $skillManager->findNodePathToRoot($uuid);
            $json = new \Model\JsonResponse();
            $json->setData($path);
            
            $view = new View("graph.php", array(
                "rootNode"  => $rootNode,
                "title"     => "Home !",
                "action"    => "goto",
                "jsonAutoLoad"  => $json->getJson($path, false),
                "slug"      => $slug)
            );
            $view->setLayout("../View/layouts/graph.php");
            $view->send();
        }


        /**
         * The project page
         */
        public function projectAction(){
            $view = new View("project.php", array("title" => "The Skill Project"));
            
            $view->send();
        }



        /**
         * The legal page
         */
        public function legalAction(){
            $view = new View("legal.php", array("title" => "Boring | Skill Project"));
            
            $view->send();
        }


    }