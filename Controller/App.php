<?php

    namespace Controller;

    use Config\Config;
    use Symfony\Component\Routing\Matcher\UrlMatcher;
    use Symfony\Component\HttpFoundation\Request;


    class App {

        public function run(){
            $this->initRouting();
            $this->useSession();
            $this->detectLanguage();
            $this->defineBaseUrl();
            $this->handleRouting();
        }

        private function initRouting(){
            //some globals like $routes
            require_once("../Config/routes.php");
            $GLOBALS['routes'] = $routes;

            //request context globally available
            $GLOBALS['context'] = new \Symfony\Component\Routing\RequestContext();
        }

        public function detectLanguage(){

            $default = \Config\Config::DEFAULT_LOCALE;

            //first, the subdomain
            $subdomain = strtolower(explode(".",$_SERVER['HTTP_HOST'])[0]);

            //looking like a lang subdomain ?
            if (preg_match("#^[a-z]{2}$#", $subdomain)){
                $langSubdomain = $subdomain;
            }

            //retrieves all our accepted languages
            $languageCodes = new \Model\LanguageCode();
            $allCodes = $languageCodes->getAllCodes("short");

            //if we are on lang subdomain
            if (isset($langSubdomain)){
                //check if supported
                $lang = (in_array($langSubdomain, $allCodes)) ? $langSubdomain : $default;
            }
            //if we are on www. on no subdomain
            else {   
                //detect browser lang
                $language = new \Browser\Language();
                $langBrowser = $language->getLanguage();

                //if broswer lang is supported
                $lang = (in_array($langBrowser, $allCodes)) ? $langBrowser : $default;

                //redirect, and start again 
                header("Location: " . \Controller\Router::url("home", array("lang" => $lang)));
                die();
            }

            $GLOBALS['lang'] = $lang;
            setlocale(LC_ALL, $languageCodes->getIsoCode($GLOBALS['lang']));
            bindtextdomain("messages", \Config\Config::BASE_PATH . "l10n");
            textdomain("messages");
        }


        private function defineBaseUrl(){
            $base = \Config\Config::BASE_URL;
            if(substr($base, -1) == '/') {
                $base = substr($base, 0, -1);
            }
            $GLOBALS['base_url'] = str_replace("{locale}", $GLOBALS['lang'], $base);
        }


        private function useSession(){
            //we use sessions
            session_start();
        }

        private function handleRouting(){

            global $routes, $context;
                    
            //symfony shit to get the route
            $context->fromRequest(Request::createFromGlobals());
            $matcher = new UrlMatcher($routes, $context);
            try {
                $urlParameters = $matcher->match($context->getPathInfo());
            }
            catch(\Symfony\Component\Routing\Exception\ResourceNotFoundException $e){
                Router::fourofour($e->getMessage());
            }

            if (empty($urlParameters)){
                Router::fourofour();
            }

            //instanciate the controller
            $className = "Controller" . '\\' . $urlParameters['controller'] . "Controller";
            $controller = new $className();

            // method
            $method = $urlParameters['action'] . 'Action';

            //extract the parameters from url, and pass them to the method based on key name
            try {
                $r = new \ReflectionMethod($className, $method);
            }
            catch (\ReflectionException $e){
                Router::fourofour($e->getMessage());
            }

            $methodParams = $r->getParameters();

            //to generate the link to the same page in other langs
            $GLOBALS['routing']['currentAction'] = $urlParameters['action'];
            $GLOBALS['routing']['currentParams'] = array();

            $params = array();
            foreach ($methodParams as $param) {
                foreach($urlParameters as $urlParameterName => $value){
                    if ($param->getName() == $urlParameterName){
                        $params[] = $value;
    
                        //to generate the link to the same page in other langs
                        $GLOBALS['routing']['currentParams'][$param->getName()] = $value;
                    }
                }
            }


            //call it
            call_user_func_array(array($controller, $method), $params);
        }


    }