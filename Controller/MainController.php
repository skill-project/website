<?php
    
    namespace Controller;

    use \View\View;

    class MainController extends Controller {

        /**
         * Home page
         */
        public function homeAction(){
            $view = new View("home.php", array("title" => "Home !"));
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