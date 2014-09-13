<?php

    namespace Controller;

    class Router {

        public static function url($name, $params = array()){
            global $context, $routes;
            $urlGen = new \Symfony\Component\Routing\Generator\UrlGenerator($routes, $context);
            return $urlGen->generate($name, $params);
        }

        public static function redirect($url){
            header("Location: " . $url);
            die();
        }

        public static function showRoutes(){
            global $routes;
            foreach($routes as $route){
                echo $route->getPath() . "<br />";
            }
        }

        public static function fourofour($message = null){
            header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
            echo "<h1>404 !</h1>";
            if ($message && \Config\Config::DEBUG){
                echo $message;
            }
            die();
        }

    }