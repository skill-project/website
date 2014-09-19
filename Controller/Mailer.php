<?php   

    namespace Controller;

    use \Model\User;
    
    class Mailer {

        public function sendConfirmation(User $user){

            ob_start();
            $confirmUrl = Router::url("emailConfirmation", array("email" => $user->getEmail(), "token" => $user->getToken()), true);
            include '../View/mails/registration_confirmation.php';
            $content = ob_get_clean();

            try {
                $mandrill = new \Mandrill(\Config\Config::MANDRILL_KEY);
                $message = array(
                    'html' => $content,
                    'text' => 'Example text content',
                    'subject' => _('Welcome to Skill Project !'),
                    'from_email' => 'accounts@skill-project.com',
                    'from_name' => 'Skill Project',
                    'to' => array(
                        array(
                            'email' => $user->getEmail(),
                            'name' => $user->getUsername(),
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => 'accounts@skill-project.com'),
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
                $async = false;
                $result = $mandrill->messages->send($message, $async);
                return $result;

            } catch(\Mandrill_Error $e) {
                // Mandrill errors are thrown as exceptions
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
                throw $e;
            }
            

        }

    }
