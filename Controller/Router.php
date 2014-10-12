<?php

    namespace Controller;

    class Router {

        public static function url($name, $params = array(), $absolute = false){
            global $context, $routes;

            //add locale to params if not set
            $params['lang'] = (empty($params['lang'])) ? $GLOBALS['lang'] : $params['lang'];

            //tries to use a localised route
            $transName = $name."_".$params['lang'];
            if ($routes->get($transName)){
                $name = $transName;
            }

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
            $params = array("message" => "");
            if ($message && \Config\Config::DEBUG){
                $params['message'] = $message;
            }
            $view = new \View\View("fourofour.php", array("title" => _("You 404ed")));
            $view->send();
            die();
        }

        public static function websiteDown($message = ""){
            header("Location: " . $GLOBALS['base_url'] . '/maintenance.html');
            die();
        }

        public static function reload(){
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' 
                || $_SERVER['SERVER_PORT'] == 443) ? 'https://' : 'http://';
            $loc = str_replace("index.php", "", $protocol.$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI]);
            header('Location: '.$loc);
            die();
        }

    }