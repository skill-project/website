<?php

    namespace Model;

    class Validator {

        protected $errors = array();
        protected $isValid = true;

        //username
        public function validateUsername($username){
            if (empty($username)){
                $this->addError("username", _("Please provide an username."));
            }
            elseif (strlen($username) < 3 || strlen($username) > 50){
                $this->addError("username", _("Your username must be between 3 and 50 caracters long."));
            }
            elseif ( !preg_match("#^[A-Za-z0-9_.-]{3,50}$#", $username) ){
                $this->addError("username", _("Your username must only contains letters, numbers and/or _-.."));
            }
        }

        public function validateUniqueUsername($username){
            $userManager = new \Model\UserManager();
            $found = $userManager->findByUsername($username);
            if ($found){
                $this->addError("username", _("This username is already taken !"));
            }
        }

        //email
        public function validateEmail($email){
            if (empty($email)){
                $this->addError("email", _("Please provide an email."));
            }
            elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $this->addError("email", _("Your email is invalid."));
            }
        }

        public function validateUniqueEmail($email){
            $userManager = new \Model\UserManager();
            $found = $userManager->findByEmail($email);
            if ($found){
                $this->addError("email", _("This email is already taken !"));
            }
        }

        //can be an email or a username
        public function validateLoginUsername($loginUsername){
            $usernameValid = true;
            $emailValid = true;
            if (empty($loginUsername)
                    || strlen($loginUsername) < 3 || strlen($loginUsername) > 50 
                    || !preg_match("#^[A-Za-z0-9_.-]{3,50}$#", $loginUsername) 

                ){
                $usernameValid = false;
            }
         
            if (!filter_var($loginUsername, FILTER_VALIDATE_EMAIL)){
                $emailValid = false;
            }

            if ($usernameValid || $emailValid){
                return true;
            }
            else {
                $this->addError("loginUsername", _("Invalid username or email."));
            }

        }

        //password 
        public function validatePassword($password){
            if (empty($password)){
                $this->addError("password", _("Please provide a password."));
            }
            elseif (strlen($password) < 8){
                $this->addError("password", _("Your password must have at least 8 caracters."));
            }
        }

        public function validatePasswordBis($password_bis, $password){
            if (empty($password_bis)){
                $this->addError("password_bis", _("Please confirm your password."));
            }
            elseif ($password !== $password_bis){
                $this->addError("password_bis", _("Your passwords do not match."));
            }
        }

        public function validateSkillName($skillName){
            if (empty($skillName)){
                $this->addError("skillName", _("Please provide a skill name."));
            }
            elseif (strlen($skillName) < 3 || strlen($skillName) > 40){
                $this->addError("skillName", _("The skill name must be between 3 and 40 caracters long."));
            }
        }

        public function validateSkillParentUuid($skillParentUuid){
            if (empty($skillParentUuid)){
                $this->addError("skillParentUuid", _("Please select a skill as parent of your node."));
            }
            elseif(!preg_match("#^[a-f0-9]{14}f[a-f0-9]{8}$#", $skillParentUuid)){
                $this->addError("skillParentUuid", _("The parent is not valid."));  
            }
        }

        public function validateSkillUuid($uuid){
            //5414554b1592f9f36155801
            if (empty($uuid) || !preg_match("#^[a-f0-9]{14}f[a-f0-9]{8}$#", $uuid)){
                $this->addError("skillUuid", _("Invalid skill id."));
            }
        }

        public function validateLanguageCode($languageCode){
            if (empty($languageCode)){
                $this->addError("language", _("Please select a language."));
            }
            elseif (strlen($languageCode) !== 2 || !preg_match("#[a-z]{2}#", $languageCode)){
                $this->addError("language", _("Invalid language code."));
            }
        }

        protected function addError($fieldName, $message){
            $this->isValid = false;
            $this->errors[$fieldName] = $message;
        }

        public function isValid(){
            return $this->isValid;
        }

        public function getErrors(){
            return $this->errors;
        }

    }