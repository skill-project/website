<?php

    namespace Model;

    class JsonResponse {

        private $status;            //ok or error
        private $message;           //message
        private $data = array();    //data to send

        public function __construct($status = "ok", $message = ""){
            $this->status = $status;
            $this->message = $message;
        }

        /**
         * Add data to $data array
         */
        public function addData($data){
            $this->data[] = $data;
        }

        /**
         * Replace data in $data array
         */
        public function setData(array $data){
            $this->data = $data;
        }

        /**
         * end the script with the complete json response
         * @todo do NOT allow acao *
         */
        public function send(){
            $all['status'] = $this->status;
            $all['message'] = $this->message;
            $all['data'] = $this->data;
            $json = json_encode($all, JSON_PRETTY_PRINT);
            header('Access-Control-Allow-Origin: *');  
            header('Content-Type: application/json');   
            die($json);
        }

    }