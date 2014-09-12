<?php

    namespace Model;

    class JsonNode {

        private $id;
        private $name;
        private $parent = array();

        public function __construct($id, $name, $parent = NULL){
            $this->id = $id;
            $this->name = $name;
            $this->parent = (int) $parent;
        }

        public function getArray(){
            $data = array(
                "id" => $this->id,
                "name" => $this->name,
                "parent" => $this->parent
            );
            return $data;
        }

    }