<?php
    
    namespace Utils;

    class IdGenerator{

        public static function getUniqueId(){
            return str_replace(".", "f", uniqid('', true));
        }

    }