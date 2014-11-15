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
                                    'email' => "helpdesk@skill-project.org",
                                    'name' => "HelpDesk",
                                    'type' => 'to'
                                ),
                            );



        /**
         * Load and return the content relative to the folder View/mails/
         */
        private function getContent($contentFile, array $params){
            ob_start();
            extract($params);
            include("../View/layouts/email.php");
            //include '../View/mails/' . $contentFile;
            $content = ob_get_clean();
            return $content;
        }

        private function outputToFile($content){
            if (\Config\Config::DEBUG){
                file_put_contents(sys_get_temp_dir() . "/mail3453454345.html", $content);
            }
        }


        public function sendRegistrationConfirmation(User $user){

            $confirmUrl = Router::url("emailConfirmation", array("email" => $user->getEmail(), "token" => $user->getToken()), true);
            $content = $this->getContent('registration_confirmation.php', array("confirmUrl" => $confirmUrl));
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Welcome to Skill Project!'),
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

        public function sendContactMessageConfirmation(array $params){

            $content = $this->getContent('contact_message_confirmation.php', $params);
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('We received your message on Skill Project!'),
                    'to' => array(
                        array(
                            'email' => $params['email'],
                            'name' => $params['realName'],
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

        public function sendAdminApplicationConfirmation(array $params){

            $content = $this->getContent('admin_application_confirmation.php', $params);
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Your application on Skill Project'),
                    'to' => array(
                        array(
                            'email' => $params['loggedUser']->getEmail(),
                            'name' => $params['loggedUser']->getUsername(),
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
                    'subject' => _('Forgot your password on Skill Project?'),
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

        public function sendAdminApplication(array $params){

            $content = $this->getContent('admin_application.php', $params);
            $this->outputToFile($content);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Skill Project: New application!'),
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

        public function sendContactMessage(array $params){

            $content = $this->getContent('contact_message.php', $params);
            $this->outputToFile($content);
            // die("toremove");
            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);

                //different config here watch out
                $config = array(
                    'from_email' => $params['email'],
                    'from_name' => $params['realName'],
                    'headers' => array('Reply-To' => $params['email']),
                    'html' => $content,
                    'subject' => _('Skill Project: New Contact Message!'),
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

        public function sendWarning($params){

            $content = $this->getContent("warning_to_admins.php", $params);

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $config = array(
                    'html' => $content,
                    'subject' => _('Skill Project Alert: ' .$params['type']. '!'),
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

        public function sendDiscussNotifications($recipients, $discussionData) {

            foreach($recipients as $recipient) {
                $type = $recipient["type"];
                
                $email = $recipient["email"];
                $name = $recipient["name"];

                $userLanguage = "en";
                if (!empty($recipient['siteLanguage'])){
                    $userLanguage = $recipient["siteLanguage"];
                }

                if ($userLanguage == "en") $skillName = $discussionData["skill"]->getName();
                else $skillName = $discussionData["skill"]->getTranslation($userLanguage);


                $data = array(
                    "type"          => $type,
                    "name"          => $name,
                    "skillName"     => $skillName,
                    "skillUrl"      => \Controller\Router::url("goTo", array("slug" => $discussionData["skill"]->getSlug()), true),
                    "message"       => $discussionData["message"],
                    "language"      => $userLanguage,
                    "currentUser"   => $discussionData["currentUser"],
                );

                $content = $this->getContent("discuss_notification.php", $data);

                if ($userLanguage == "en") $subject = sprintf("%s just commented on \"%s\"", $discussionData["currentUser"], $skillName);
                else if ($userLanguage == "fr") $subject = sprintf("%s a commenté la compétence \"%s\"", $discussionData["currentUser"], $skillName);

                // echo $email . "\n";
                // echo $type . "\n";
                // echo $userLanguage . "\n";
                // echo $skillName . "\n";
                // echo $subject . "\n\n";

                try {
                    $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                    $config = array(
                        'html' => $content,
                        'subject' => $subject,
                        'to' => array(
                                    array(
                                        'email' => $email,
                                        'name' => $name,
                                        'type' => 'to'
                                    )
                                )
                    );
                    $message = array_merge($this->defaultConfig, $config);
                    $async = false;
                    $result = $mandrill->messages->send($message, $async);
                } 
                catch(\Mandrill_Error $e) {
                    $this->handleError($e);
                }
            }
        }

        private function handleError($e){
            if (\Config\Config::DEBUG){
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                throw $e;
            }
        }
    }
