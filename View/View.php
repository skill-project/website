<?php

    namespace View;

    class View {

        protected $page;
        protected $data;
        protected $title = "Skill Project";

        protected $layout = "../View/layouts/default.php";

        public function __construct($page, $data = array()){
            $this->page = $page;
            $this->data = $data;
        }

        public function setLayout($layout){
            $this->layout = $layout;
        }

        public function setTitle($title){
            $this->title = $title;
        }

        public function send(){
            $title = $this->title;
            if (!empty($this->data['title'])){
                $title = $this->title . " | " . $this->data['title'];
                unset($this->data['title']);
            }

            //exposes the vars
            $data = $this->data;
            extract($data);

            $page = $this->page;

            require_once($this->layout);
        }

    }