<?php

    namespace Utils;

    use \Model\User;

    class SecurityHelper {

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

        public static function lock($requiredRole = ""){
            $forbid = false;
            $reason = "";

            //if no user is connected, forbid
            if (!self::userIsLogged()){
                $forbid = true;
                $reason = _("You must be signed in to do that !");
            }
            //if role required is admin and current user is not admin, forbid
            elseif ($requiredRole == "superadmin" && self::getUser()->getRole() != "superadmin"){
                $forbid = true;
                $reason = _("You do have the required role to do that !");
            }
            //if role required is admin and current user is not admin, forbid
            elseif ($requiredRole == "admin" && 
                (self::getUser()->getRole() != "admin" || self::getUser()->getRole() != "superadmin")
                ){
                $forbid = true;
                $reason = _("You do have the required role to do that !");
            }

            if ($forbid){
                self::forbid($reason);
            }
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