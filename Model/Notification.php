<?php

    namespace Model;

    use \Everyman\Neo4j\Node;

    class Notification extends Entity {

        protected $uuid;
        protected $timestamp;
        protected $type;

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

            if (!$this->node){
                return false;
            }

            $props = $this->node->getProperties();

            foreach($props as $prop => $value){
                $methodName = "set" . ucfirst($prop);

                if (method_exists($this, $methodName)){
                    $this->$methodName($value);
                }
            }
            return $this;
        }
        
        /**
         * Gets the value of uuid.
         *
         * @return mixed
         */
        public function getUuid()
        {
            return $this->uuid;
        }

        /**
         * Sets the value of uuid.
         *
         * @param mixed $uuid the uuid
         *
         * @return self
         */
        public function setUuid($uuid)
        {
            $this->uuid = $uuid;

            return $this;
        }

        /**
         * Gets the value of timestamp.
         *
         * @return mixed
         */
        public function getTimestamp()
        {
            return $this->timestamp;
        }

        /**
         * Sets the value of timestamp.
         *
         * @param mixed $timestamp the timestamp
         *
         * @return self
         */
        public function setTimestamp($timestamp)
        {
            $this->timestamp = $timestamp;

            return $this;
        }

        /**
         * Gets the value of type.
         *
         * @return mixed
         */
        public function getType()
        {
            return $this->type;
        }

        /**
         * Sets the value of type.
         *
         * @param mixed $type the type
         *
         * @return self
         */
        public function setType($type)
        {
            $this->type = $type;

            return $this;
        }

        /**
         * Gets the value of node.
         *
         * @return mixed
         */
        public function getNode()
        {
            return $this->node;
        }

        /**
         * Sets the value of node.
         *
         * @param mixed $node the node
         *
         * @return self
         */
        public function setNode($node)
        {
            $this->node = $node;

            return $this;
        }
    }