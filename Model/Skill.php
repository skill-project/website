<?php

    namespace Model;

    use \Everyman\Neo4j\Node;

    class Skill extends Entity {

        //uuid in Entity
        protected $name;
        protected $depth;
        
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

            return $this;
        }

    }