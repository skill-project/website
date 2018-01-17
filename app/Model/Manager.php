<?php

    namespace App\Model;

    class Manager {

        protected $client;

        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }

    }