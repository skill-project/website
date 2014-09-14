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

        public function getJson($pretty = true){
            $all['status'] = $this->status;
            $all['message'] = $this->message;
            $all['data'] = $this->data;
            $json = ($pretty) ? json_encode($all, JSON_PRETTY_PRINT) : json_encode($all);
            return $json;
        }

        /**
         * end the script with the complete json response
         * @todo do NOT allow acao *
         */
        public function send(){
            $json = $this->getJson();
            header('Access-Control-Allow-Origin: *');  
            header('Content-Type: application/json');   
            die($json);
        }

    }