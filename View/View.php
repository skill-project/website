<?php

    namespace View;

    class View {

        protected $page;
        protected $data;

        protected $layout = "../View/layouts/default.php";

        public function __construct($page, $data = array()){
            $this->page = $page;
            $this->data = $data;
        }

        public function setLayout($layout){
            $this->layout = $layout;
        }

        public function send(){
            //exposes the vars
            $data = $this->data;
            extract($data);
            $page = $this->page;

            require_once($this->layout);
        }

    }