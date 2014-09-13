<?php

    namespace Model;

    class Manager {

        protected $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

    }