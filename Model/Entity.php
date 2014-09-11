<?php

    namespace Model;

    class Entity {

        protected $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

    }