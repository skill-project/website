<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Traversal;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Cypher\Query;

    class TranslationManager extends Manager {

        public function insertSkillTranslation($languageCode, $name, Skill $skill){
            $user = \Utils\SecurityHelper::getUser();

            $cypher = "MATCH (s:Skill) WHERE id(s) = {skillId} 
                        CREATE (s)-[r:TRANSLATES_INTO]->(t:Translation {lang: {languageCode}, name: {name}})
                        RETURN t";
            $query = new Query($this->client, $cypher, array(
                                    "skillId" => $skill->getId(),
                                    "languageCode" => $languageCode,
                                    "name" => $name
                                )
                            );
            $resultSet = $query->getResultSet();
            if ($resultSet){
                $translationNode = $resultSet[0]['t'];
            }

            $user = \Utils\SecurityHelper::getUser();

            $rel = $this->client->makeRelationship();
            $rel->setStartNode($user->getNode())
                ->setEndNode($translationNode)
                ->setType('CREATED')
                ->setProperty('date', date("Y-m-d H:i:s"))
                ->save();

        }


        public function updateSkillTranslation($name, Node $translationNode){
            $translationNode->setProperty('name', $name)->save();

            $user = \Utils\SecurityHelper::getUser();

            $rel = $this->client->makeRelationship();
            $rel->setStartNode($user->getNode())
                ->setEndNode($translationNode)
                ->setType('MODIFIED')
                ->setProperty('date', date("Y-m-d H:i:s"))
                ->save();

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

        public function findSkillTranslations(Skill $skill){
            $cypher = "MATCH (s:Skill)-[r:TRANSLATES_INTO]->(t:Translation)
                        WHERE id(s) = {skillId}
                        RETURN t";
            $query = new Query($this->client, $cypher, array("skillId" => $skill->getId()));
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

    }