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

        public function getLocalName($languageCode) {
          try {
            if (!in_array($languageCode, array_keys($this->codes))) throw new \Exception("Invalid languageCode");

            $localNames = array(
              'en'  => _("English"),
              'fr'  => _("French"),
              'xl'  => "xLang"
            );

            return $localNames[$languageCode];  
          }
          catch (\Exception $e) {
            die("Error: " . $e->getMessage() . " @ " . $e->getFile() . ":" . $e->getLine());
          }
          
        }

        public function localizeCarbon($string, $languageCode = "") {
          if (empty($languageCode) or !in_array($languageCode, array_keys($this->codes))) $languageCode = $GLOBALS["lang"];

          switch ($languageCode) {
            case "en":
              return $string;
              break;
            case "fr":
              $localizedString = preg_replace("/([0-9]+) second(s)? ago/", 'Il y a ${1} seconde${2}', $string);
              $localizedString = preg_replace("/([0-9]+) minute(s)? ago/", 'Il y a ${1} minute${2}', $localizedString);
              $localizedString = preg_replace("/([0-9]+) hour(s)? ago/", 'Il y a ${1} heure${2}', $localizedString);
              $localizedString = preg_replace("/([0-9]+) day(s)? ago/", 'Il y a ${1} jour${2}', $localizedString);
              $localizedString = preg_replace("/([0-9]+) week(s)? ago/", 'Il y a ${1} semaine${2}', $localizedString);
              $localizedString = preg_replace("/([0-9]+) month(s)? ago/", 'Il y a ${1} mois', $localizedString);
              $localizedString = preg_replace("/([0-9]+) year(s)? ago/", 'Il y a ${1} année${2}', $localizedString);
              break;
          }

          return $localizedString;
        }
    }