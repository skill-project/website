<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Cocur\Slugify\Slugify;

    class Skill extends Entity {

        //uuid in Entity
        protected $name;
        protected $depth;
        protected $slug;
        
        protected $node = null;


        public function __construct(Node $node = null){
            parent::__construct();
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
                $methodName = "set" . ucfirst($prop);
                if (method_exists($this, $methodName)){
                    $this->$methodName($value);
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
            $this->node->setProperties(
                array(
                    "id" => $this->id,
                    "slug" => $this->slug,
                    "uuid" => $this->uuid,
                    "name" => $this->name,
                    "depth" => $this->depth
            ));

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
            $data = array(
                "uuid" => $this->uuid,
                "name" => $this->name,
                "slug" => $this->slug,
                "depth" => $this->depth
            );
            return $data;
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
                $slugify = new Slugify();
                $slug = $slugify->slugify($this->getName()) . "-" . substr($this->getUuid(), 0, 14);
                $this->setSlug($slug);
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
    }