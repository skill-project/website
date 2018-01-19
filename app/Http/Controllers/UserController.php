<?php
    
    namespace App\Http\Controllers;

    use App\Model\JsonResponse;
    use App\Model\CustomValidator;
    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Node;
    use Illuminate\Routing\Route;
    use Illuminate\Support\Facades\Redirect;
    use Model\Validator;
    use \View\View;
    use App\Model\User;
    use App\Model\SkillManager;
    use App\Model\UserManager;
    use \Symfony\Component\Routing\Generator\UrlGenerator;
    use \Controller\Router;
    use App\Helpers\SecurityHelper as SH;
    use Illuminate\Http\Request;


    class UserController extends \App\Http\Controllers\Controller {

        /**
         * Show login form and handles it
         */
        public function loginAction(Request $request){
            //for the view
            $params = array("title" => _("Sign in"));

            $params['loginUsername'] = "";

            //handle login form
            if (!empty($_POST)){
                $error = true;

                $loginUsername = $_POST['loginUsername'];
                $params['loginUsername'] = $loginUsername;
                $password = $_POST['password'];

                //validation
                $validator = new CustomValidator();

                $validator->validateLoginUsername($loginUsername);
                $validator->validatePassword($password);

                //if valid
                if ($validator->isValid()){
                    //find user from db
                    $userManager = new UserManager();
                    $user = $userManager->findByEmailOrUsername($loginUsername);

                    //if user found
                    if($user){

//                        hash password
                        $securityHelper = new SH();
                        $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt());
//                        $hashedPassword = bcrypt($password);

                        //compare hashed passwords
                        if ($hashedPassword === $user->getPassword()){
                            //login
                            $error = false;
                            $this->logUser($request, $user);
                            $json = new JsonResponse();
                            $json->setData(array("redirectTo" => '/skills'));
                            $json->send();
                        }
                    }
                }
                if($error){
                    $params['error']['global'] = _("You username/email and password do not match");
                }
            }
            return view('auth.login',['params'=>$params]);
//            $view = new View("login.php", $params);
//            $view->setLayout("../View/layouts/modal.php");
//            $view->send(true);
        }

        private function logUser(Request $request, User $user){
            SH::putUserDataInSession($request,$user);
        }

        public function logoutAction(Request $request){
//            $request->session()->forget('user');
            $request->session()->flush();
            return \redirect('/');
        }

        /**
         * Show registration form and handles it
         */
        public function registerAction(Request $request){
            //for the view
            $params = array("title" => _("Sign up"), "errors" => array());

            $params['username'] = "";
            $params['email'] = "";

            //handle register form
            if ($request->isMethod('post')){

                $username = $request->input('username');
                $params['username'] = $username;
                $email = $request->input('email');
                $params['email'] = $email;
                $password = $request->input('password');
                $password_bis = $request->input('password_bis');

                //validation
                $validator = new CustomValidator();

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
                    $user->setSiteLanguage( 'en' );
                    $user->setActive( true );

                    $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                    
                    $user->setPassword( $hashedPassword );
//                    $user->setIpAtRegistration( $_SERVER['REMOTE_ADDR'] );
                    $user->setIpAtRegistration($request->ip());
                    $user->setDateCreated( time() );
                    $user->setDateModified( time() );

                    //save it
                    $userManager = new UserManager();
                    $userManager->save($user);
//                    @TODO: MAILER
//                    send email confirmation message
//                    $mailer = new Mailer();
//
//                    $mailerResult = $mailer->sendRegistrationConfirmation($user);

                    //log user in right now (will redirect home)
                    $this->logUser($request, $user);
//                    $this->logUser($request, $user);
                    $json = new JsonResponse();
                    $json->setData(array("redirectTo" => Route('graph')));
                    $json->send();
                }
                //not valid
                else {
                    $errors = $validator->getErrors();
                    $params["errors"] = $errors;
                    return response()->json([
                        'error' => $errors
                    ],400);
                }

            }
            return view('auth.register',['params'=> $params]);
//            $view = new View("register.php", $params);
//            $view->setLayout("../View/layouts/modal.php");
//            $view->send(true);
        }

        /**
         * Show the first forgot password form, handle it, and send a message
         */
        public function forgotPassword1Action(){

            $params = array();
            $params['title'] = _("Forgot your password?");
            $params['loginUsername'] = "";

            //handle forgot 1 form
            if (!empty($_POST)){

                $error = true;

                $loginUsername = $_POST['loginUsername'];
                $params['loginUsername'] = $loginUsername;

                //validation
                $validator = new CustomValidator();

                $validator->validateLoginUsername($loginUsername);

                //if valid
                if ($validator->isValid()){

                    //find user from db
                    $userManager = new UserManager();
                    $user = $userManager->findByEmailOrUsername($loginUsername);

                    //if user found
                    if($user){

                        $error = false;
                        
                        //send a message
                        $mailer = new Mailer();
                        $mailerResult = $mailer->sendPasswordRecovery($user);
                    }
                }

                if($error){
                    $params['error']['global'] = _("This email or username is not valid.");
                }
                else {
                    $params['message'] = _("Please check your emails!");
                    $view = new View("success.php", $params);
                    $view->setLayout("../View/layouts/modal.php");
                    $view->send(true);
                }
            }

            $view = new View("forgot_password.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send(true);
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
         * Show the change password form in modal
         */
        public function changePasswordAction(Request $request){

            $params['title'] = _("CHANGE PASSWORD");

            //handle forgot 1 form
            if (!empty($_POST)){

                $error = true;
                $password = $_POST['password'];
                $password_bis = $_POST['password_bis'];

                //validation
                $validator = new CustomValidator();

                $validator->validatePassword($password);
                $validator->validatePasswordBis($password_bis, $password);

                //if valid
                if ($validator->isValid()){
                    $securityHelper = new SH();

                    //find user from db
                    $user = $securityHelper->getUser($request);

                    //if user found
                    if($user){

                        $hashedPassword = $securityHelper->hashPassword( $password, $user->getSalt() );
                        $user->setPassword( $hashedPassword );

                        $userManager = new UserManager();
                        $userManager->update($user);

                        $params["message"] = _("Password updated!");
                        $view = new View("success.php", $params);
                        $view->setLayout("../View/layouts/modal.php");
                        $view->send(true);
                    }
                }
                
                $params['errors'] = $validator->getErrors();
            }


            $view = new View("change_password.php", $params);
            $view->setLayout("../View/layouts/modal.php");
            $view->send(true);
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
            Router::redirect( Router::url("graph") );
        }
    

        /**
         * Show the profile, but with the password modal opened
         */
        public function profileWithPasswordAction($username){
            $this->profileEdit($username, true);
        }

        /**
         * Show the profile (public)
         */
        public function viewProfileAction($username){
            $userManager = new UserManager();
            $securityHelper = new SH();

            $profileUser = $userManager->findByUsername($username);
            if (!$profileUser){
                Router::fourofour(_("This user never was born, or vanished."));
            }

            $skillManager = new SkillManager();
            $latestActivity = $skillManager->getLatestActivity($profileUser);

            $params = array();
            $params['latestActivity'] = $latestActivity;

            $params['profileUser'] = $profileUser;

            $usernameEncoded = SH::encode($username);
            $params['title'] = sprintf(_("%s's Profile"), $usernameEncoded);
            return \view('pages.profile',['params'=> $params]);
//            $view = new View("view_profile.php", $params);
//
//            $view->send();
        }

        /**
         * Show the profile edit page
         */
        public function profileEdit($username, $withPassword = false,Request $request){

            $userManager = new UserManager();
            $securityHelper = new SH();

            $profileUser = $userManager->findByUsername($username);
            $loggedUser = $securityHelper->getUser($request);
    
            if (!$profileUser){
                route('fourofour','This user does not exist');
            }
            elseif (!$loggedUser){
                SH::forbid();
            }
            elseif($loggedUser->getUsername() != $profileUser->getUsername()){
                SH::forbid();
            }

            $skillManager = new SkillManager();
            $latestActivity = $skillManager->getLatestActivity($profileUser);

            $uploadErrors = false;  
            $errors = false;
            //profile form submitted
            if (!empty($_POST) && $loggedUser){

                $newUsername = $_POST['username'];
                $newEmail = $_POST['email'];
                $bio = $_POST['bio'];
                $interests = $_POST['interests'];
                $languages = $_POST['languages'];
                $country = $_POST['country'];

                //validation
                $validator = new CustomValidator();

                $validator->validateUsername($newUsername);
                //changing username ?
                if ($newUsername != $loggedUser->getUsername()){
                    $validator->validateUniqueUsername($newUsername);
                }
                $validator->validateEmail($newEmail);
                 //changing email ?
                if ($newEmail != $loggedUser->getEmail()){
                    $validator->validateUniqueEmail($newEmail);
                }

                if ($validator->isValid()){

                    //hydrate user obj
                    $user = $securityHelper->getUser($request);

                    $user->setUsername( $newUsername );
                    $user->setEmail( $newEmail );
                    $user->setInterests( $interests );
                    $user->setLanguages( $languages );
                    $user->setCountry( $country );
                    $user->setBio( $bio );


                    /*
                     * @TODO: Add profile picture
                     */
//                    if (!empty($_FILES['picture']['tmp_name'])){
//
//                        $errCode = $_FILES['picture']['error'];
//
//                        if ($errCode != 4){
//                            if ($errCode == 1 || $errCode == 2){
//                                $uploadErrors[] = _("Your picture is too large!");
//                            }
//                            else if ($errCode == 3){
//                                $uploadErrors[] = _("An error occured while uploading your picture!");
//                            }
//
//                            //HANDLE UPLOAD
//                            $tmp_name = $_FILES['picture']['tmp_name'];
//
//                            $finfo = finfo_open(FILEINFO_MIME_TYPE);
//                            $mime = finfo_file($finfo, $tmp_name);
//
//                            if (substr($mime, 0, 5) != "image"){
//                                $uploadErrors[] = _("Your picture is invalid!");
//                            }
//                            else {
//                                $img = new \abeautifulsite\SimpleImage($tmp_name);
//                                if ($img->get_width() < 180 || $img->get_height() < 180){
//                                    $uploadErrors[] = _("Your picture is too small!");
//                                }
//                            }
//
//                            if (empty($uploadErrors)){
//                                $filename = uniqid() . ".jpg";
//                                $img->thumbnail(180,180)->save("img/uploads/" . $filename, 100); //quality as second param
//                                $user->setPicture( $filename );
//                            }
//                        }
//                    }

                    $userManager->update($user);
                    $securityHelper->putUserDataInSession($request, $user);
                    return view('profile',['username'=> $user->getUsername()]);
//                    Router::redirect( Router::url('viewProfile', array('username' => $user->getUsername())) );
                }
                else {
                    $errors = $validator->getErrors();
                }
            }

            $params = array();
            $params['errors'] = $errors;
            $params['uploadErrors'] = $uploadErrors;
            $params['latestActivity'] = $latestActivity;

            if ($withPassword){ $params['showPasswordResetForm'] = true; }
            $params['profileUser'] = $profileUser;

            $usernameEncoded = SH::encode($username);
            $params['title'] = sprintf(_("%s's Profile"), $usernameEncoded);

            //csrf token for delete account link
//            $params['csrfToken'] = SH::setNewCsrfToken();

            return view('pages.profile', ['params'=> $params]);
//            $view = new View("profile.php", $params);
//
//            $view->send();

        }


        public function deletePictureAction(Request $request){
            $userManager = new UserManager();
            $securityHelper = new SH();

            $loggedUser = $securityHelper->getUser($request);
            if (!$loggedUser){
                SH::forbid();
            }
            if (file_exists("img/uploads/" . $filename)){
                unlink("img/uploads/" . $filename);
                $loggedUser->setPicture("");
                $userManager->update($loggedUser);
            }
            Router::redirect(Router::url("profile", array("username" => $loggedUser->getUsername())));
        }


        /**
         * The apply page
         */
        public function applyAction(Request $request){

            $params = array();
            $params['title'] = _("Become part of the project!");

            $userManager = new UserManager();
            $securityHelper = new SH();

            $loggedUser = $securityHelper->getUser($request);
            $params['loggedUser'] = $loggedUser;

            if (!empty($_POST) && $loggedUser){

                $loggedUser->setApplicationStatus(2); //in process
                $userManager->update($loggedUser);

                //extract post data
                foreach($_POST as $key => $value){
                    $params[$key] = SH::safe($value);
                }

                $mailer = new Mailer();
                if ($mailer->sendAdminApplication($params)[0]['reject_reason'] == null){
                    $mailer->sendAdminApplicationConfirmation($params);
                }
                return view('pages.apply');
            }

            return view('pages.apply',['params'=> $params]);
//            $view = new View("apply.php", $params);
//            $view->send();
        }

        /**
         * Handle to lang switching, after selection in the lang menu
         */
        public function switchLanguageAction($code){

            //save lang in cookie
            setcookie("lang", $code, time()+31536000, "/", ".".\Config\Config::DOMAIN, false);

            if (!empty($_GET['redirectTo'])){
                Router::redirect( urldecode($_GET['redirectTo']) );
            }
            Router::redirect( Router::url("home") );
        }


        /**
         * Js connect for Vanilla
         */
        public function jsConnectVanillaAction(Request $request){
            require_once '../vanilla-connect/functions.jsconnect.php';

            // 1. Get your client ID and secret here. These must match those in your jsConnect settings.
            $clientID = "874963617";
            $secret = "47486b32d5e9eab58e1f9b2c52fd47cd";

            // 2. Grab the current user from your session management system or database here.
            $signedIn = false; // this is just a placeholder

            // YOUR CODE HERE.
            $userObj = SH::getUser($request);
            if ($userObj){
                $signedIn = true;
            }

            // 3. Fill in the user information in a way that Vanilla can understand.
            $user = array();

            if ($signedIn) {
                // CHANGE THESE FOUR LINES.
                $user['uniqueid'] = $userObj->getUuid();
                $user['name'] = $userObj->getUsername();
                $user['email'] = $userObj->getEmail();
                $user['photourl'] = '';
                if ($userObj->getPicture() && file_exists("img/uploads/".$userObj->getPicture())){
                    $user['photourl'] = $GLOBALS['base_url'] . '/img/uploads/'.$userObj->getPicture();
                }
            }

            // 4. Generate the jsConnect string.

            // This should be true unless you are testing. 
            // You can also use a hash name like md5, sha1 etc which must be the name as the connection settings in Vanilla.
            $secure = true; 
            WriteJsConnect($user, $_GET, $clientID, $secret, $secure);

        } 


        public function deleteAccountAction($csrfToken,Request $request){
            
            $userManager = new UserManager();
            $securityHelper = new SH();

            $user = $securityHelper->getUser($request);
            if (!$user || !SH::checkCsrfToken($csrfToken)){
                SH::forbid();
            }

            $user->setActive(false);
            $userManager->update($user);

            Router::redirect(Router::url("logout"));

        }

    }