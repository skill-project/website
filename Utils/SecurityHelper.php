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

        public static function lock(){
            if (!self::userIsLogged()){
                header('HTTP/1.0 403 Forbidden');
                die("Forbidden");
            }
        }

        public static function userIsLogged(){
            if (!empty($_SESSION['user']['id'])){
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
                "id" => $user->getId(),
                "uuid" => $user->getUuid(),
                "role" => $user->getRole(),
                "username" => $user->getUsername(),
                "email" => $user->getEmail()
            );
            $_SESSION['user'] = $sessionUser;
        }


    }