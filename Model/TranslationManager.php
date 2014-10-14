<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    class TranslationManager extends Manager {

        /**
         * Insert or update
         */ 
        public function saveSkillTranslation($languageCode, $name, Skill $skill, $auto = false){
            $user = \Utils\SecurityHelper::getUser();


            $cypher = "MATCH (s:Skill {uuid: {skillUuid}}), (u:User {uuid: {userUuid}})
                        CREATE (s)<-[ru:**autoLabel**TRANSLATED {timestamp: {now}, to: {languageCode}, name: {name}}]-(u) 
                        SET s.l_$languageCode = {name} 
                        RETURN s";
                        
            $autoLabel = ($auto) ? "AUTO_" : "";
            $cypher = str_replace("**autoLabel**", $autoLabel, $cypher);

            $query = new Query($this->client, $cypher, array(
                                    "skillUuid"     => $skill->getUuid(),
                                    "languageCode"  => $languageCode,
                                    "name"          => $name,
                                    "userUuid"      => $user->getUuid(),
                                    "now"           => time()
                                )
                            );

            $resultSet = $query->getResultSet();

            if ($resultSet){
                return true;
            }
            return false;

        }


        /**
         * Return translation of a skill in specified language
         * @param Skill the skill
         * @param string The language code
         * @return mixed false when not existing, the Node if found
         */
        public function findSkillTranslationInLanguage(Skill $skill, $languageCode){
            $cypher = "MATCH (s:Skill)-[r:TRANSLATES_INTO]->(t:Translation)
                        WHERE id(s) = {skillId} AND t.lang = {languageCode}
                        RETURN t LIMIT 1";
            $query = new Query($this->client, $cypher, array(
                "skillId" => $skill->getId(),
                "languageCode" => $languageCode
                )
            );
            $resultSet = $query->getResultSet();
            if (count($resultSet)){
                return $resultSet[0]['t'];
            }
            return false;
        }

        public function findSkillTranslations($uuid){
            $cypher = "MATCH (s:Skill)-[r:TRANSLATES_INTO]->(t:Translation)
                        WHERE s.uuid = {uuid}
                        RETURN t";
            $query = new Query($this->client, $cypher, array("uuid" => $uuid));
            $resultSet = $query->getResultSet();

            $translations = array();
            foreach($resultSet as $row){
                $trans = array();
                $trans['languageCode'] = $row['t']->getProperty('lang');
                $trans['name'] = $row['t']->getProperty('name');
                $trans['id'] = $row['t']->getId();
                $translations[] = $trans;
            }

            return $translations;
        }


        public function googleTranslate($string, $toLang, $fromLang = ""){

            //url query params
            $params = array(
                "q"         => $this->convertCaseForGoogleTranslate($string),
                "format"    => "text",
                "key"       => \Config\Config::GOOGLE_TRANSLATE_API_KEY,
                "source"    => $fromLang,
                "target"    => $toLang
            );

            //build the url
            $url = "https://www.googleapis.com/language/translate/v2?";
            foreach($params as $k => $v){
                $url .= $k . "=" . urlencode($v) . "&";
            }
            $url = substr($url, 0, -1);

            //call it
            $jsonResult = file_get_contents($url);

            //handle result
            $result = json_decode($jsonResult, true);
            if (!empty($result['data']['translations']) && count($result['data']['translations']) > 0){
                return $result['data']['translations'][0]['translatedText'];
            }
            return false;

        }

        private function convertCaseForGoogleTranslate($string){

            $newString = "";

            $words = explode(" ", $string);
            foreach($words as $w){
                if (ctype_upper(preg_replace("#\d#", "", $w))){
                    $newString .= " $w";
                }
                else {
                    $newString .= " " . mb_strtolower($w, 'UTF-8');
                }
            }

            $newString = ucfirst(trim($newString));

            return $newString;
        }

    }