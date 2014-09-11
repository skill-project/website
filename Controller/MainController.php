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


    }