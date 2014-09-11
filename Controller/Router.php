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
    }