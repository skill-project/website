<?php

    namespace View;

    class View {

        protected $page;
        protected $data;
        protected $title = "Skill Project";
        protected $lang;

        protected $layout = "../views/layouts/default.php";

        public function __construct($page, $data = array()){
            $this->page = $page;
            $this->data = $data;
            $this->lang = env('lang'); //global
        }

        public function setLayout($layout){
            $this->layout = $layout;
        }

        public function setTitle($title){
            $this->title = $title;
        }

        public function send($leaveTitleAlone = false){
            $title = $this->title;
            if (!empty($this->data['title']) && !$leaveTitleAlone){
                $title = $this->title . " | " . $this->data['title'];
                unset($this->data['title']);
            }

            //exposes the vars
            $data = $this->data;
            extract($data);

            $page = $this->page;

            //localised page
            if ($this->lang != "en"){
                $loc_page = $this->lang . "_" . $this->page;
                if (file_exists("../views/pages/".$loc_page)){
                    $page = $loc_page;
                }
            }
            
            require_once($this->layout);
        }

    }