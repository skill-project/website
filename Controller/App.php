<?php

    namespace Controller;

    use Config\Config;
    use Symfony\Component\Routing\Matcher\UrlMatcher;
    use Symfony\Component\HttpFoundation\Request;


    class App {

        public function run(){
            $this->createGlobals();
            $this->useSession();
            $this->detectLanguage();
            $this->handleRouting();
        }

        public function detectLanguage(){

            //retrieves all our accepted languages
            $languageCodes = new \Model\LanguageCode();
            $allCodes = $languageCodes->getAllCodes();

            //desired lang, first one being preferred
            $wantedLangs = array();

            //first, the subdomain
            $subdomain = strtolower(explode(".",$_SERVER['HTTP_HOST'])[0]);
            if (preg_match("#[a-z]{2}#", $subdomain)){
                $wantedLangs[] = $subdomain;
            }

            //then, get client browser language
            $language = new \Browser\Language();
            $browserLang = $language->getLanguage();
            $wantedLangs[] = $browserLang;

            //then, default
            $wantedLangs[] = "en";

            foreach($wantedLangs as $wantedLang){
                if (isset($currentLanguage)){ break; }
                foreach($allCodes as $code => $infos){
                    if ($wantedLang === $code){
                        $currentLanguage = $code;
                        break;
                    }
                }
            }

            $GLOBALS['lang'] = $currentLanguage;
            setlocale(LC_ALL, $languageCodes->getIsoCode($GLOBALS['lang']));
            bindtextdomain("messages", \Config\Config::BASE_PATH . "l10n");
            textdomain("messages");
        }

        private function createGlobals(){
            //some globals like $routes
            require_once("../Config/routes.php");
            $GLOBALS['routes'] = $routes;

            //request context globally available
            $GLOBALS['context'] = new \Symfony\Component\Routing\RequestContext();
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
            $params = array();
            foreach ($methodParams as $param) {
                foreach($urlParameters as $urlParameterName => $value){
                    if ($param->getName() == $urlParameterName){
                        $params[] = $value;
                    }
                }
            }

            //call it
            call_user_func_array(array($controller, $method), $params);
        }


    }