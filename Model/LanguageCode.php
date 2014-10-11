<?php

    namespace Model;
    
    class LanguageCode {

        /**
         * returns all ISO 639-1-alpha 2 language codes, in php array or json
         */
        public function getAllCodes($format = "array", $omitXLang = false){
            $returnCodes = $this->codes;
            if ($omitXLang == true) unset($returnCodes["xl"]);

            if ($format == "array"){
                return $returnCodes;
            }
            elseif($format == "json"){
                return json_encode($returnCodes);
            }
            elseif($format == "short"){
                return array_keys($returnCodes);
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
          'xl' => 
          array (
            'name' => 'xLang',
            'nativeName' => 'xXxxx',
            'isoCode' => 'fr_LU.UTF-8'
          ),
        );
    }