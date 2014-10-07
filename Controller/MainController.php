<?php
    
    namespace Controller;

    use \View\View;
    use \Model\SkillManager;

    use \Utils\SecurityHelper as SH;

    class MainController extends Controller {

        /**
         * Home page
         */
        public function homeAction(){
            $skillManager = new SkillManager();

            $rootNode = $skillManager->findRootNode();
            $view = new View("home.php", array(
                "title" => _("The Universal Skills Map"))
            );
            
            $view->send();
        }

        /**
         * The graph
         */
        public function graphAction(){

            $skillManager = new SkillManager();
            $rootNode = $skillManager->findRootNode();

            $user = \Utils\SecurityHelper::getUser();
            $userClass = "anonymous";
            if ($user){
                $userClass = $user->getRole();
            }
            
            $view = new View("graph.php", array(
                    "rootNode"  => $rootNode,
                    "title"     => _("Explore"),
                    "userClass" => $userClass

                )
            );
            $view->setLayout("../View/layouts/graph.php");
            $view->send();
        }

        /**
         * goTo a specific skill
         */
        public function goToAction($slug){
            $skillManager = new SkillManager();

            $rootNode = $skillManager->findRootNode();

            $uuid = $skillManager->getUuidFromSlug($slug);
            $path = $skillManager->findNodePathToRoot($uuid);

            if (!$path){
                Router::fourofour();
            }

            $skill = $skillManager->findByUuid($uuid);
            $json = new \Model\JsonResponse();
            $json->setData($path);
            
            $view = new View("graph.php", array(
                "rootNode"  => $rootNode,
                "title"     => $skill->getName(),
                "action"    => "goto",
                "jsonAutoLoad"  => $json->getJson($path, false),
                "slug"      => $slug
                )
            );
            $view->setLayout("../View/layouts/graph.php");
            $view->send();
        }


        /**
         * The project page
         */
        public function projectAction(){
            $view = new View("project.php", array("title" => _("The Project")));
            
            $view->send();
        }



        /**
         * The legal page
         */
        public function legalAction(){
            $view = new View("legal.php", array("title" => _("Legal Stuff")));
            
            $view->send();
        }

        /**
         * The contact page
         */
        public function contactAction(){

            $params = array(
                "title" => _("Contact us"),
                "email" => "",
                "realName" => "",
                "message" => ""
            );

            $params['contact_message_sent'] = false;
            if (!empty($_SESSION['contact_message_sent'])){
                unset($_SESSION['contact_message_sent']);
                $params['contact_message_sent'] = true;
            }

            //to prefill the form
            if ($user = SH::getUser()){
                $params['email'] = $user->getEmail();
            }

            if (!empty($_POST)){
                $params['email'] = SH::safe($_POST['email']);
                $params['realName'] = SH::safe($_POST['real_name']);
                $params['message'] = SH::safe($_POST['message']);

                $validator = new \Model\Validator();
                $validator->validateMessage($params['message']);
                $validator->validateEmail($params['email']);

                if ($validator->isValid()){
                    //send mail to us

                    $mailer = new Mailer();
                    if ($mailer->sendContactMessage($params)){
                        $_SESSION['contact_message_sent'] = true;
                        $mailer->sendContactMessageConfirmation($params);
                        Router::reload();
                    }
                    else {
                        $validator->addError("global", _("A problem occurred while sending your message. Please try again !"));
                    }

                }

                if ($validator->hasErrors()){
                    $params["errors"] = $validator->getErrors();
                }
            }

            $view = new View("contact.php", $params);
            $view->send();
        }


    }