<?php
    
    namespace Controller;

    use \Model\DatabaseFactory;

    class Controller {

        protected $client; //holds the connection

        /**
         * allways get a connection
         */
        public function __construct(){
            $this->client = DatabaseFactory::getClient();
        }


    }