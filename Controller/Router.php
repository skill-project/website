<?php

    namespace Controller;

    class Router {

        public static function url($name, $params = array(), $absolute = false){
            global $context, $routes;

            //add locale to params if not set
            $params['lang'] = (empty($params['lang'])) ? $GLOBALS['lang'] : $params['lang'];

            $urlGen = new \Symfony\Component\Routing\Generator\UrlGenerator($routes, $context);
            $url = $urlGen->generate($name, $params);

            if ($absolute){
                $url = $GLOBALS['base_url'].$url;
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