<?php
    
    namespace Controller;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Node;
    use \View\View;
    use \Model\User;
    use \Model\UserManager;
    use \Symfony\Component\Routing\Generator\UrlGenerator;

    class UserController extends Controller {

        /**
         * Show login form and handles it
         */
        public function loginAction(){
            //for the view
            $params = array("title" => "Login !");

            //handle login form
            if (!empty($_POST)){

                $error = true;

                $email = $_POST['email'];
                $password = $_POST['password'];

                //validation
                $validator = new \Model\Validator();

                $validator->validateEmail($email);
                $validator->validatePassword($password);

                //if valid
                if ($validator->isValid()){

                    //find user from db
                    $userManager = new UserManager();
                    $user = $userManager->findByEmail($email);

                    //if user found
                    if($user){

                        //hash password
                        $securityHelper = new \Utils\SecurityHelper();
                        $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                        
                        //compare hashed passwords
                        if ($hashedPassword === $user->getPassword()){
                            //login
                            $error = false;
                            $this->logUser($user);
                        }
                    }
                }

                if($error){
                    $params['error']['global'] = _("You email and password do not match");
                }
            }

            $view = new View("login.php", $params);
            $view->send();
        }

        private function logUser(User $user){
            $sessionUser = array(
                "id" => $user->getId(),
                "username" => $user->getUsername(),
                "email" => $user->getEmail()
            );
            $_SESSION['user'] = $sessionUser;
            \Controller\Router::redirect(\Controller\Router::url('home'));
        }

        public function logoutAction(){
            $_SESSION['user'] = NULL;
            session_destroy();
            \Controller\Router::redirect(\Controller\Router::url('home'));
        }

        /**
         * Show registration form and handles it
         */
        public function registerAction(){
            //for the view
            $params = array("title" => "Register !");

            //handle register form
            if (!empty($_POST)){

                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $password_bis = $_POST['password_bis'];

                //validation
                $validator = new \Model\Validator();

                $validator->validateUsername($username);
                $validator->validateEmail($email);
                $validator->validatePassword($password);
                $validator->validatePasswordBis($password_bis, $password);

                if ($validator->isValid()){

                    //hydrate user obj
                    $securityHelper = new \Utils\SecurityHelper();
                    $user = new User();
                    
                    $user->setUsername( $username );
                    $user->setEmail( $email );
                    $user->setSalt( $securityHelper->randomString() );
                    $user->setToken( $securityHelper->randomString() );

                    $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                    
                    $user->setPassword( $hashedPassword );
                    $user->setIpAtRegistration( $_SERVER['REMOTE_ADDR'] );
                    $user->setDateCreated( date("Y-m-d H:i:s") );
                    $user->setDateModified( date("Y-m-d H:i:s") );

                    //save it
                    $userManager = new \Model\UserManager();
                    $userManager->save($user); 
            
                    //header("Location: ");
                }
                //not valid
                else {
                    $errors = $validator->getErrors();
                    $params["errors"] = $errors;
                    print_r($errors);
                }
            }

            $view = new View("register.php", $params);
            $view->send();
        }

    }