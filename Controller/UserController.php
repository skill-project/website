<?php
    
    namespace Controller;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Node;
    use \View\View;
    use \Model\User;
    use \Model\UserManager;
    use \Symfony\Component\Routing\Generator\UrlGenerator;
    use \Controller\Router;
    use \Utils\SecurityHelper as SH;

    class UserController extends Controller {

        /**
         * Show login form and handles it
         */
        public function loginAction(){
            //for the view
            $params = array("title" => "Sign in");

            //handle login form
            if (!empty($_POST)){

                $error = true;

                $loginUsername = $_POST['loginUsername'];
                $password = $_POST['password'];

                //validation
                $validator = new \Model\Validator();

                $validator->validateLoginUsername($loginUsername);
                $validator->validatePassword($password);

                //if valid
                if ($validator->isValid()){

                    //find user from db
                    $userManager = new UserManager();
                    $user = $userManager->findByEmailOrUsername($loginUsername);

                    //if user found
                    if($user){

                        //hash password
                        $securityHelper = new SH();
                        $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                        
                        //compare hashed passwords
                        if ($hashedPassword === $user->getPassword()){
                            //login
                            $error = false;
                            $this->logUser($user);
                            Router::redirect(Router::url('home'));

                        }
                    }
                }

                if($error){
                    $params['error']['global'] = _("You username/email and password do not match");
                }
            }

            $view = new View("login.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send();
        }

        private function logUser(User $user){
            SH::putUserDataInSession($user);
        }

        public function logoutAction(){
            $_SESSION['user'] = NULL;
            session_destroy();
            Router::redirect(Router::url('home'));
        }

        /**
         * Show registration form and handles it
         */
        public function registerAction(){
            //for the view
            $params = array("title" => "Sign up", "errors" => array());

            //handle register form
            if (!empty($_POST)){

                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $password_bis = $_POST['password_bis'];

                //validation
                $validator = new \Model\Validator();

                $validator->validateUsername($username);
                $validator->validateUniqueUsername($username);
                $validator->validateEmail($email);
                $validator->validateUniqueEmail($email);
                $validator->validatePassword($password);
                $validator->validatePasswordBis($password_bis, $password);

                if ($validator->isValid()){

                    //hydrate user obj
                    $securityHelper = new SH();
                    $user = new User();
                    
                    $user->setNewUuid();
                    $user->setUsername( $username );
                    $user->setEmail( $email );
                    $user->setEmailValidated(false);
                    $user->setRole( "user" );
                    $user->setSalt( SH::randomString() );
                    $user->setToken( SH::randomString() );

                    $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                    
                    $user->setPassword( $hashedPassword );
                    $user->setIpAtRegistration( $_SERVER['REMOTE_ADDR'] );
                    $user->setDateCreated( time() );
                    $user->setDateModified( time() );

                    //save it
                    $userManager = new \Model\UserManager();
                    $userManager->save($user); 
            
                    //send email confirmation message
                    $mailer = new Mailer();
                    $mailerResult = $mailer->sendConfirmation($user);

                    //log user in right now (will redirect home)
                    $this->logUser($user);
                    Router::redirect(Router::url('home'));

                }
                //not valid
                else {
                    $errors = $validator->getErrors();
                    $params["errors"] = $errors;
                }
            }

            $view = new View("register.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send();
        }

        /**
         * Show the first forgot password form, handle it, and send a message
         */
        public function forgotPassword1Action(){

            $params = array();
            $params['title'] = _("Forgot your password ?");

            //handle forgot 1 form
            if (!empty($_POST)){

                $error = true;

                $loginUsername = $_POST['loginUsername'];

                //validation
                $validator = new \Model\Validator();

                $validator->validateLoginUsername($loginUsername);

                //if valid
                if ($validator->isValid()){

                    //find user from db
                    $userManager = new UserManager();
                    $user = $userManager->findByEmailOrUsername($loginUsername);

                    //if user found
                    if($user){
                        
                        //send a message
                        $mailer = new Mailer();
                        $mailerResult = $mailer->sendPasswordRecovery($user);

                    }
                }

                if($error){
                    $params['error']['global'] = _("This email or username is not valid.");
                }
            }

            $view = new View("forgot_password.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send();
        }

        /**
         * Validates the token and email, then redirect to profile page with a modal new password form
         */
        public function forgotPassword2Action($email, $token){
            $userManager = new UserManager();
            $user = $userManager->findByEmail($email);
            if ($user){
                if ($user->getToken() === $token){
                    $user->setEmailValidated(true);
                    //change the token 
                    $user->setToken( SH::randomString() );
                    $userManager->update($user);
                    $this->logUser($user);
                    Router::redirect(Router::url("profileWithPassword", array("username" => $user->getUsername())));
                }
            }
            Router::fourofour();
        }



        /**
         * Show the first forgot password form, handle it, and send a message
         */
        public function changePasswordAction(){

            $params['title'] = _("CHANGE PASSWORD");

            //handle forgot 1 form
            if (!empty($_POST)){

                $error = true;
                $password = $_POST['password'];
                $password_bis = $_POST['password_bis'];

                //validation
                $validator = new \Model\Validator();

                $validator->validatePassword($password);
                $validator->validatePasswordBis($password_bis, $password);

                //if valid
                if ($validator->isValid()){
                    $securityHelper = new SH();

                    //find user from db
                    $user = $securityHelper->getUser();

                    //if user found
                    if($user){

                        $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                        $user->setPassword( $hashedPassword );

                        $userManager = new UserManager();
                        $userManager->update($user);

                        Router::redirect(Router::url('profile', array('username' => $user->getUsername())));

                    }
                }

                if($error){
                    $params['error']['global'] = _("This email or username is not valid.");
                }
            }

            $view = new View("change_password.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send();
        }


        /**
         * Confirms an email adress after registration
        */
        public function emailConfirmationAction($email, $token){
            $userManager = new UserManager();
            $user = $userManager->findByEmail($email);
            if ($user){
                if ($user->getToken() === $token){
                    $user->setEmailValidated(true);
                    //change the token 
                    $user->setToken( SH::randomString() );
                    $userManager->update($user);
                }
            }
        }
    

        /**
         * Show the profile, but with the password modal opened
         */
        public function profileWithPasswordAction($username){
            $this->profileAction($username, true);
        }

        /**
         * Show the profile
         */
        public function profileAction($username, $withPassword = false){

            $userManager = new UserManager();
            $user = $userManager->findByUsername($username);

            if (!$user){
                Router::fourofour(_("This user never was born, or vanished."));
            }

            $params = array();
            if ($withPassword){ $params['showPasswordResetForm'] = true; }
            $params['user'] = $user;
            $params['title'] = SH::encode($username) . _("'s profile | Skill Project");
            $view = new View("profile.php", $params);
            $view->setLayout("../View/layouts/page.php");
            $view->send();
        
        }

    }