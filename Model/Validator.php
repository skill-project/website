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

        //email
        public function validateEmail($email){
            if (empty($email)){
                $this->addError("email", _("Please provide an email."));
            }
            elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $this->addError("email", _("Your email is invalid."));
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

        public function validateSkillParentId($skillParentId){
            if (empty($skillParentId) && $skillParentId != 0){
                $this->addError("skillParentId", _("Please select a skill as parent of your node."));
            }
            elseif(!is_numeric($skillParentId)){
                $this->addError("skillParentId", _("The parent is not valid."));  
            }
        }

        public function validateSkillId($skillId){
            if (empty($skillId) && $skillId != 0){
                $this->addError("skillId", _("Invalid skill id."));
            }
            elseif(!is_numeric($skillId)){
                $this->addError("skillId", _("The skill id is not valid."));  
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