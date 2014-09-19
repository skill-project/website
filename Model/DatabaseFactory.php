<?php

    namespace Model;

    use \Config\Config;

    class DatabaseFactory {

        private static $client;

        /**
         * Sets a new connection
         * @todo handle connections errors properly
         * @return void
         */
        public static function setNewClient(){
            try{
                self::$client = new \Everyman\Neo4j\Client(Config::NEO_HOST, Config::NEO_PORT);
            }
            catch(\Everyman\Neo4j\Exception $e){
                if (Config::debug){
                    echo $e->getMessage();
                }
            }
        }

        /**
         * Return a new connection
         * @return obj Client
         * 
         */
        public static function getNewClient(){
            self::setNewClient();
            return self::$client;
        }

        /**
         * Return the previous connection, or a new one if no previous connection
         * @return obj Client
         * 
         */
        public static function getSingleClient(){
            if (!self::$client){
                self::setNewClient();
            }
            return self::$client;
        }

        /**
         * Alias of getSincleClient
         * @return obj Client
         * 
         */
        public static function getClient(){
            return self::getSingleClient();
        }

    }