<?php

    namespace Controller;

    class Router {

        public static function url($name, $params = array(), $absolute = false){
            global $context, $routes;
            $urlGen = new \Symfony\Component\Routing\Generator\UrlGenerator($routes, $context);
            $url = $urlGen->generate($name, $params);

            if ($absolute){
                $base = \Config\Config::BASE_URL;
                if(substr($base, -1) == '/') {
                    $base = substr($base, 0, -1);
                }
                $url = $base.$url;
            }

            return $url;
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