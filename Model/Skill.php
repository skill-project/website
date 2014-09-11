<?php

    namespace Model;

    class Skill extends Entity {

        private $id;
        private $name;

        public function __construct($name = ""){
            parent::__construct();
            $this->name = $name;
        }

    }