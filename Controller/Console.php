<?php

    namespace Controller;

    use Config\Config;

    class Console {
        public function run(){
            $this->initRouting();
            $this->handleRouting();
        }

        private function initRouting(){
            require_once(\Config\Config::BASE_PATH . "Config/commands.php");

        }

        private function handleRouting(){

            global $commands;

            $command = $_SERVER["argv"][1];
            
            if (array_key_exists($command, $commands)) {
                $controller = "\Controller\\" . $commands[$command]["controller"];
                $action = $commands[$command]["action"] . "Action";
                $params = array_slice($_SERVER["argv"], 2);

                call_user_func_array(array($controller, $action), $params);
            }else {
                echo "Command \"$command\" not regognized\n\n";
                $this->listCommands();
            }

            echo "\n";
        }

        public function listCommands() {
            global $commands;

            echo "Available commands:";

            foreach($commands as $commandName => $commandData) {
                echoC("\n\t$commandName", "green");
            }
        }

        public function getParams($params) {
            return explode(" ", $params);
        }

    }