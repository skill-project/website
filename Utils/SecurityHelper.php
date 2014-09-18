<?php

    namespace Utils;

    use \Model\User;

    class SecurityHelper {

        private $pepper = "biq0e923kfjw93Fwe90T#gr09w0fdfj9dfw23r2390QGGdjsgiadjob()fasdjk*";

        public function randomString($length = 50){
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

        public static function lock($role = ""){
            $forbid = false;
            
            //if no user is connected, forbid
            if (!self::userIsLogged()){
                $forbid = true;
            }
            //if role required is admin and current user is not admin, forbid
            elseif ($role == "admin" && self::getUser()->getRole != "admin"){
                $forbid = true;
            }

            if ($forbid){
                header('HTTP/1.0 403 Forbidden');
                die("Forbidden");
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
            setcookie(session_name(),session_id(),time()+31536000,"/"); //1 year
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