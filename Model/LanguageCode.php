<?php

    namespace Model;
    
    class LanguageCode {

        /**
         * returns all ISO 639-1-alpha 2 language codes, in php array or json
         */
        public function getAllCodes($format = "array"){
            if ($format == "array"){
                return $this->codes;
            }
            elseif($format == "json"){
                return json_encode($this->jsonCodes);
            }
        }

        public function getNames($languageCode){
            foreach($this->codes as $code => $names){
                if ($code == $languageCode){
                    return $names;
                }
            }
            return false;
        }


        protected $codes = array (
          'de' => 
          array (
            'name' => 'German',
            'nativeName' => 'Deutsch',
          ),
          'en' => 
          array (
            'name' => 'English',
            'nativeName' => 'English',
          ),
          'es' => 
          array (
            'name' => 'Spanish; Castilian',
            'nativeName' => 'Español, castellano',
          ),
          'fr' => 
          array (
            'name' => 'French',
            'nativeName' => 'Français',
          ),
          'it' => 
          array (
            'name' => 'Italian',
            'nativeName' => 'Italiano',
          ),
          'pt' => 
          array (
            'name' => 'Portuguese',
            'nativeName' => 'Português',
          )
        );
    }