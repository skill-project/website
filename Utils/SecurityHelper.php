<?php

    namespace Utils;

    use \Model\User;

    class SecurityHelper {

        private static $rolesHierarchy = array(
            "user"       => array("user"),
            "admin"      => array("admin", "user"),
            "superadmin" => array("superadmin", "admin", "user")
        );


        private $pepper = "biq0e923kfjw93Fwe90T#gr09w0fdfj9dfw23r2390QGGdjsgiadjob()fasdjk*";

        public static function randomString($length = 50){
            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            $string = "";
            for($i=0; $i<$length; $i++){
                $charNum = mt_rand(0, strlen($chars)-1);
                $string .= $chars[$charNum];
            }
            return $string;
        }

        public function hashPassword($plainPassword, $userSalt){
            //slow hash
            $hashedPassword = hash("sha512", $plainPassword);
            for($i=0;$i<5000;$i++){
                $hashedPassword = hash("sha512", $this->pepper . $hashedPassword . $userSalt);
            }
            return $hashedPassword;
        }

        public static function lock($minimumRole = ""){
            //if no user is connected, forbid
            if (!self::userIsLogged()){
                return self::forbid(_("You must be signed in to do that !"));
            }
            //if no minimum role, return true
            else if ($minimumRole == ""){
                return true;
            }
            //else, with a mimimum role
            else {

                $userRole = self::getUser()->getRole();

                $authorizedLevels = self::$rolesHierarchy[$userRole];
                //check if user has this capability
                if (!in_array($minimumRole, $authorizedLevels)){
                    return self::forbid(_("You must be signed in to do that !"));
                }
            }
            return true;
        }


        public static function checkUsage($maxUsage = 10, $inHowManySeconds = 60){

            //retrieve the api method being called
            $callers=debug_backtrace();
            if (!empty($callers[1]['function'])){
                $call = $callers[1]['function'];
            }

            if (!$call){
                self::forbid("irregular usage");
            }

            $now = time();

            //add the time of this call to session
            $_SESSION['usage'][$call][] = $now;

            //count the number of calls in the last x seconds
            $count = 0;
            foreach($_SESSION['usage'][$call] as $t){
                $since = $now-$inHowManySeconds;
                if ($t > $since){
                    $count++;
                }
            }

            //remove old ones
            while ($_SESSION['usage'][$call][0] < $since){
                array_shift($_SESSION['usage'][$call]);
            }

            //above limits for this call ?
            if ($count > $maxUsage){
                self::forbid("irregular usage");
            }
        }


        public static function userIsLogged(){
            if (!empty($_SESSION['user']['uuid'])){
                return true;
            }
            return false;
        }

        public static function getUser(){
            if (self::userIsLogged()){
                $userManager = new \Model\UserManager;
                $user = $userManager->findByEmail($_SESSION['user']['email']);
                if ($user){
                    self::putUserDataInSession($user);
                    return $user;
                }
                else {
                    \Controller\Router::redirect(\Controller\Router::url('logout'));
                }
            }
            return false;
        }


        public static function putUserDataInSession(User $user){
            $sessionUser = array(
                "uuid" => $user->getUuid(),
                "role" => $user->getRole(),
                "username" => $user->getUsername(),
                "email" => $user->getEmail()
            );
            $_SESSION['user'] = $sessionUser;
        }

        public static function forbid($reason = ""){
            header('HTTP/1.0 403 Forbidden');
            $message = ($reason) ? "Forbidden : $reason" : "Forbidden";
            die($message);
        }

        /**
         * Before save to db
         */
        public static function safe($string){
            return strip_tags($string);
        }

        /**
         * Before outputing
         */
        public static function encode($string){
            return htmlspecialchars($string);
        }

    }