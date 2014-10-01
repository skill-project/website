<?php   

    namespace Controller;

    use \Model\User;
    
    class Mailer {

        private $defaultConfig = 
            array(
                'from_email' => 'helpdesk@skill-project.org',
                'from_name' => 'Skill Project',
                'headers' => array('Reply-To' => 'helpdesk@skill-project.org'),
                'important' => false,
                'track_opens' => null,
                'track_clicks' => null,
                'auto_text' => null,
                'auto_html' => null,
                'inline_css' => null,
                'url_strip_qs' => null,
                'preserve_recipients' => null,
                'view_content_link' => null,
                'tracking_domain' => null,
                'signing_domain' => null,
                'return_path_domain' => null,
                'merge' => true,
                'global_merge_vars' => array(
                    array(
                        'name' => 'merge1',
                        'content' => 'merge1 content'
                    )
                ),
                'merge_vars' => array(
                    array(
                        'rcpt' => 'recipient.email@example.com',
                        'vars' => array(
                            array(
                                'name' => 'merge2',
                                'content' => 'merge2 content'
                            )
                        )
                    )
                )
            );

        private $admins =   array(
                                array(
                                    'email' => "guillaume@skill-project.org",
                                    'name' => "Guillaume",
                                    'type' => 'to'
                                ),
                               array(
                                    'email' => "raphael@skill-project.org",
                                    'name' => "Raphael",
                                    'type' => 'to'
                                ),
                                array(
                                    'email' => "dario@skill-project.org",
                                    'name' => "Dario",
                                    'type' => 'to'
                                )
                            );



        /**
         * Load and return the content relative to the folder View/mails/
         */
        private function getContent($contentFile, array $params){
            ob_start();
            extract($params);
            include '../View/mails/' . $contentFile;
            $content = ob_get_clean();
            return $content;
        }

        private function outputToFile($content){
            if (\Config\Config::DEBUG){
                file_put_contents("mail3453454345.html", $content);
            }
        }


        public function sendConfirmation(User $user){

            $confirmUrl = Router::url("emailConfirmation", array("email" => $user->getEmail(), "token" => $user->getToken()), true);
            $content = $this->getContent('registration_confirmation.php', array("confirmUrl" => $confirmUrl));
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Welcome to Skill Project !'),
                    'to' => array(
                        array(
                            'email' => $user->getEmail(),
                            'name' => $user->getUsername(),
                            'type' => 'to'
                        )
                    )
                );
                $message = array_merge($this->defaultConfig, $config);
                $async = false;
                $result = $mandrill->messages->send($message, $async);
                return $result;

            } 
            catch(\Mandrill_Error $e) {
                $this->handleError($e);
            }
        }


        public function sendPasswordRecovery(User $user){

            $recoveryUrl = Router::url("forgotPassword2", array("email" => $user->getEmail(), "token" => $user->getToken()), true);
            $content = $this->getContent('password_recovery.php', array("recoveryUrl" => $recoveryUrl));
            $this->outputToFile($content);
            
            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Skill Project: Password reset !'),
                    'to' => array(
                        array(
                            'email' => $user->getEmail(),
                            'name' => $user->getUsername(),
                            'type' => 'to'
                        )
                    )
                );
                $message = array_merge($this->defaultConfig, $config);
                $async = false;
                $result = $mandrill->messages->send($message, $async);
                return $result;

            } 
            catch(\Mandrill_Error $e) {
                $this->handleError($e);
            }
        }

        public function sendAdminApplication($params){

            $content = $this->getContent('admin_application.php', $params);
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Skill Project: New application !'),
                    'to' => $this->admins
                );
                $message = array_merge($this->defaultConfig, $config);
                $async = false;
                $result = $mandrill->messages->send($message, $async);
                return $result;

            } 
            catch(\Mandrill_Error $e) {
                $this->handleError($e);
            }
        }

        public function sendWarning($content, $type){

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Skill Project Alert: ' .$type. ' !'),
                    'to' => $this->admins
                );
                $message = array_merge($this->defaultConfig, $config);
                $async = false;
                $result = $mandrill->messages->send($message, $async);
                return $result;

            } 
            catch(\Mandrill_Error $e) {
                $this->handleError($e);
            }

        }

        private function handleError($e){
            if (\Config\Config::DEBUG){
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                throw $e;
            }
        }
    }
