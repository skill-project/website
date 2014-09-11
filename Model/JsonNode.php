<?php

    namespace Model;

    class JsonNode {

        private $id;
        private $name;
        private $parent = array();
        private $data;

        public function __construct($id, $name, $parent = NULL, $data = null){
            $this->id = $id;
            $this->name = $name;
            $this->parent = (int) $parent;
            $this->data = ($data) ? $data : new \stdClass;
        }

        public function getArray(){
            $data = array(
                "id" => $this->id,
                "name" => $this->name,
                //"data" => $this->data,
                "parent" => $this->parent
            );
            return $data;
        }

    }