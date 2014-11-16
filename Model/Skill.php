<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Cocur\Slugify\Slugify;
    use \Config\Config;

    class Skill extends Entity {

        //uuid in Entity
        protected $name;
        protected $depth;
        protected $slug;
        protected $capIdealMax ;
        protected $capAlert;
        protected $capNoMore;

        protected $translations = array();
        
        protected $node = null;

        protected $childrenCount;

        public function __construct(Node $node = null){
            parent::__construct();

            $this->setCapIdealMax(Config::CAP_IDEAL_MAX);
            $this->setCapAlert(Config::CAP_ALERT);
            $this->setCapNoMore(Config::CAP_NO_MORE);

            if ($node){
                $this->setNode($node);
                $this->hydrateFromNode();
            }
        }

        /**
         * Hydrate all object properties from the node
         */
        public function hydrateFromNode(){

            $props = $this->node->getProperties();

            foreach($props as $prop => $value){

                //translations
                if (preg_match("#^l_([a-z]{2})#", $prop, $match)){
                    $this->addTranslation($match[1], $value);
                }
                //the rest
                else {
                    $methodName = "set" . ucfirst($prop);

                    if (method_exists($this, $methodName)){
                        $this->$methodName($value);
                    }
                }
            }

            $this->setId( $this->node->getId() );

            return $this;
        }

        /**
         * Set the node for an (empty) skill obj
         */
        public function setNode(Node $node){
            $this->node = $node;
        }

        /**
         * Sets all node properties from the object
         */
        public function generateNode(){

            $this->node = $this->client->makeNode();
            $props = array(
                    "id" => $this->id,
                    "slug" => $this->slug,
                    "uuid" => $this->uuid,
                    "name" => $this->name,
                    "depth" => $this->depth,
                    "capIdealMax" => $this->capIdealMax,
                    "capAlert" => $this->capAlert,
                    "capNoMore" => $this->capNoMore
            );

            foreach($this->getTranslations() as $code => $name){
                $props["l_$code"] = $name;
            }

            $this->node->setProperties($props);

            return $this->node;
            
        }

        /**
         * Return the node for this entity, generates it if not present
         */
        public function getNode(){
            if ($this->node == null){
                $this->generateNode();
            }
            return $this->node;
        }


        public function getJsonData(){

            $translations = $this->getTranslations();

            //replace the skill name by the one in current locale
            //moves the english name to translations
            $localeName = $this->name;
            if ($GLOBALS['lang'] != \Config\Config::DEFAULT_LOCALE){
                if ($this->getTranslation($GLOBALS['lang'])){
                    $localeName = $this->getTranslation($GLOBALS['lang']);
                    $translations[\Config\Config::DEFAULT_LOCALE] = $this->name;
                }
            }

            $data = array(
                "uuid" => $this->uuid,
                "name" => $localeName,
                "slug" => $this->slug,
                "depth" => $this->depth,
                "childrenCount" => $this->childrenCount,
                "translations" => $translations,
                "capIdealMax" => $this->capIdealMax,
                "capAlert" => $this->capAlert,
                "capNoMore" => $this->capNoMore
            );
            return $data;
        }

        
        //setter for one translation
        public function addTranslation($lang, $name){
            $this->translations[$lang] = $name;
        }

        //get all translations
        public function getTranslations(){
            //add english to translations list
            $translations = $this->translations;
            $translations[\Config\Config::DEFAULT_LOCALE] = $this->getName();
            return $translations;
        }

        //get one translation by lang code
        public function getTranslation($lang){
            if (!empty($this->translations[$lang])){
                return $this->translations[$lang];
            }
            return false;
        }


        /**
         * Gets the value of name.
         *
         * @return mixed
         */
        public function getName(){
            return $this->name;
        }

        /**
         * Try to get a localised name
         */
        public function getLocalName(){
            $name = $this->getName();
            if ($GLOBALS['lang'] != \Config\Config::DEFAULT_LOCALE){
                if ($this->getTranslation($GLOBALS['lang'])){
                    $name = $this->getTranslation($GLOBALS['lang']);
                }
            }
            return $name;
        }

        /**
         * Sets the value of name.
         *
         * @param mixed $name the name
         *
         * @return self
         */
        public function setName($name){
            $this->name = $name;
            $this->getNode()->setProperty("name", $name);

            return $this;
        }

        /**
         * Sets the number of children
         *
         * @param mixed $childrenCount number of children
         *
         * @return self
         */
        public function setChildrenCount($childrenCount){
            $this->childrenCount = $childrenCount;

            return $this;
        }

        /**
         * Gets the number of children
         *
         * @return number of children
         */
        public function getChildrenCount(){
            return $this->childrenCount;
        }

        
        
        /**
         * Gets the value of depth.
         *
         * @return mixed
         */
        public function getDepth()
        {
            return $this->depth;
        }

        /**
         * Sets the value of depth.
         *
         * @param mixed $depth the depth
         *
         * @return self
         */
        public function setDepth($depth)
        {
            $this->depth = $depth;
            $this->getNode()->setProperty("depth", $this->depth);
            return $this;
        }

    
        /**
         * Gets the value of slug.
         *
         * @return mixed
         */
        public function getSlug()
        {
            //if new, set slug
            if (empty($this->slug)){
                $this->regenerateSlug();
            }
            return $this->slug;
        }

        /**
         * Sets the value of slug.
         *
         * @param mixed $slug the slug
         *
         * @return self
         */
        public function setSlug($slug)
        {
            $this->slug = $slug;
            if (!empty($this->getNode())){
                $this->getNode()->setProperty('slug', $this->slug);
            }

            return $this;
        }

        /**
         * Sets new slug based on name and uuid
         */
        public function regenerateSlug(){
            if (!empty($this->getName()) && !empty($this->getUuid())){
                $slugify = new Slugify();
                $slug = $slugify->slugify($this->getName()) . "-" . $this->getUuid();
                $this->setSlug($slug);
                if (!empty($this->getNode())){
                    $this->getNode()->setProperty('slug', $this->getSlug());
                }
                return $this->getSlug();
            }
            return false;
        }

        /**
         * get the user who originally created the skill
         */
        public function getOwner(){
            $skillManager = new skillManager();
            $owner = $skillManager->getSkillOwner($this->getUuid());

            return $owner;
        }

        /**
         * Gets the value of capIdealMax.
         *
         * @return mixed
         */
        public function getCapIdealMax()
        {
            return $this->capIdealMax;
        }

        /**
         * Sets the value of capIdealMax.
         *
         * @param mixed $capIdealMax the capIdealMax
         *
         * @return self
         */
        public function setCapIdealMax($capIdealMax)
        {
            $this->capIdealMax = $capIdealMax;
            if (!empty($this->getNode())){
                $this->getNode()->setProperty('capIdealMax', $this->capIdealMax);
            }
            return $this;
        }


        /**
         * Gets the value of capAlert.
         *
         * @return mixed
         */
        public function getCapAlert()
        {
            return $this->capAlert;
        }

        /**
         * Sets the value of capAlert.
         *
         * @param mixed $capAlert the capAlert
         *
         * @return self
         */
        public function setCapAlert($capAlert)
        {
            $this->capAlert = $capAlert;
            if (!empty($this->getNode())){
                $this->getNode()->setProperty('capAlert', $this->capAlert);
            }
            return $this;
        }


        /**
         * Gets the value of capNoMore.
         *
         * @return mixed
         */
        public function getCapNoMore()
        {
            return $this->capNoMore;
        }

        /**
         * Sets the value of capNoMore.
         *
         * @param mixed $capNoMore the capNoMore
         *
         * @return self
         */
        public function setCapNoMore($capNoMore)
        {
            $this->capNoMore = $capNoMore;
            if (!empty($this->getNode())){
                $this->getNode()->setProperty('capNoMore', $this->capNoMore);
            }
            return $this;
        }
        
    }