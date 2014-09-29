<?php

    namespace Utils;

    class Cache {

        const pathToCache = "../cache/";

        public static function shoot($type = "html"){
            if (self::isInCache()){
                $content = self::get();
                if ($type == "json"){
                    header('Content-Type: application/json');
                }
                die($content);
            }
            return false;
        }

        public static function put($string){
            if(file_put_contents(self::getName(), $string)){
                return true;
            }
            return false;
        }

        public static function get(){
            if (self::isInCache()){
                return file_get_contents(self::getName());
            }
            return false;
        }

        public static function getName(){
            return self::pathToCache . md5(self::getFullUrl());
        }

        public static function isInCache(){
            if (file_exists(self::getName())){
                return true;
            }
            return false;
        }

        private static function getFullUrl(){
            return "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        }

    }