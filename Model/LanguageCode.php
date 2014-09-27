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

        public function getIsoCode($languageCode){
            return $this->codes[$languageCode]["isoCode"];
        }

        protected $codes = array (
          'en' => 
          array (
            'name' => 'English',
            'nativeName' => 'English',
            'isoCode' => 'en_US.UTF-8'
          ),
          'fr' => 
          array (
            'name' => 'French',
            'nativeName' => 'Français',
            'isoCode' => 'fr_FR.UTF-8'
          ),
        );
    }