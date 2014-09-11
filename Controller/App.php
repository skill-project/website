<?php

    namespace Controller;

    use Config\Config;
    use Symfony\Component\Routing\Matcher\UrlMatcher;
    use Symfony\Component\HttpFoundation\Request;

    class App {

        public function run(){
            $this->createGlobals();
            $this->useSession();
            $this->handleRouting();
        }

        private function createGlobals(){
            //some globals like $routes
            require_once("Config/routes.php");
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
            catch(\ResourceNotFoundException $e){
                die("404");
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
                echo $e->getMessage();
                die();
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