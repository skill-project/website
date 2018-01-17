<?php

    namespace App\Model;

    class Entity {

        protected $id;
        protected $uuid;

        protected $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

        
        public function getId(){
            return $this->id;
        }

        public function setId($id){
            $this->id = $id;
        }

        public function setNewUuid(){
            $this->uuid = str_replace(".", "f", uniqid('', true));
        }


        /**
         * Gets the value of uuid.
         *
         * @return mixed
         */
        public function getUuid(){
            return $this->uuid;
        }

        /**
         * Sets the value of uuid.
         *
         * @param mixed $uuid the uuid
         *
         * @return self
         */
        public function setUuid($uuid){
            $this->uuid = $uuid;
            return $this;
        }
    }