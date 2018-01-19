<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;
use Illuminate\Support\Facades\Session;
use Mandrill;

class Mailer
{
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
            'inline_css' => true,
            'url_strip_qs' => null,
            'preserve_recipients' => null,
            'view_content_link' => null,
            'tracking_domain' => null,
            'signing_domain' => null,
            'return_path_domain' => null,
            'merge' => true,
            'merge_vars' => array(
                array(
                    'rcpt' => 'A@3.com',
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
            'email' => "anshajgoel.cer@gmail.com",
            'name' => "HelpDesk",
            'type' => 'to'
        ),
    );



    /**
     * Load and return the content relative to the folder View/mails/
     */

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
        $template_name = 'Skill-Project-ApplyConformation';
        $template_content = array(
            array(
                'name' => 'example name',
                'content' => 'example content'
            )
        );
        try {
            $mandrill = new Mandrill(env('MANDRILL_KEY'));
            $config = array(
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
            $result = $mandrill->messages->sendTemplate($template_name, $template_content, $message);
            return $result;
        }
        catch(\Mandrill_Error $e) {
            $this->handleError($e);
        }
    }


    public function sendAdminApplicationConfirmation(array $params){
        $template_name = 'Skill-Project-ApplyConformation';
        $template_content = array(
            array(
                'name' => 'example name',
                'content' => 'example content'
            )
        );
        try {
            $mandrill = new Mandrill(env('MANDRILL_KEY'));
            $config = array(
                'subject' => _('Your application on Skill Project'),
                'to' => array(
                    array(
                        'email' => Session::get('user')['email'],
                        'name' => Session::get('user')['username'],
                        'type' => 'to'
                    )
                )
            );
            $message = array_merge($this->defaultConfig, $config);
            $result = $mandrill->messages->sendTemplate($template_name, $template_content, $message);
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
            $mandrill = new Mandrill(env('MANDRILL_KEY'));
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

        $template_name = 'Skill-Project-Apply-Admins';
        $template_content = array(
            array(
                'name' => 'example name',
                'content' => 'example content'
            )
        );
        try {
            $mandrill = new Mandrill(env('MANDRILL_KEY'));
            $config = array(
                'subject' => _('Skill Project: New application!'),
                'to' => $this->admins,
                'global_merge_vars' => array(
                    array(
                        'name' => 'username',
                        'content' => Session::get('user')['username']
                    ),
                    array(
                        'name' => 'email',
                        'content' => Session::get('user')['email']
                    ),
                    array(
                        'name' => 'real_name',
                        'content' => $params['real_name']
                    ),
                    array(
                        'name' => 'country',
                        'content' => $params['country']
                    ),
                    array(
                        'name' => 'languages',
                        'content' => $params['languages']
                    ),
                    array(
                        'name' => 'update_freq',
                        'content' => $params['update_freq']
                    ),
                    array(
                        'name' => 'interests',
                        'content' => $params['interests']
                    ),
                    array(
                        'name' => 'job',
                        'content' => $params['job']
                    ),
                    array(
                        'name' => 'motiv',
                        'content' => $params['motiv']
                    )
                ));
            $message = array_merge($this->defaultConfig, $config);
            $response = $mandrill->messages->sendTemplate($template_name,$template_content, $message);
            return $response;
        }
        catch(\Mandrill_Error $e) {
            $this->handleError($e);
        }
    }

    public function sendContactMessage(array $params){
        $template_name = 'ContactMessageToAdmins';
        $template_content = array(
            array(
                'name' => 'example name',
                'content' => 'example content'
            )
        );
        try {
            $mandrill = new Mandrill(env('MANDRILL_KEY'));

            //different config here watch out
            $config = array(
                'from_email' => 'helpdesk@skill-project.org',
                'from_name' => $params['realName'],
                'headers' => array('Reply-To' => $params['email']),
                'subject' => _('Skill Project: New Contact Message!'),
                'global_merge_vars' => array(
                    array(
                        'name' => 'message',
                        'content' => $params['message']
                    ),
                    array(
                        'name' => 'email',
                        'content' => $params['email']
                    ),
                    array(
                        'name' => 'real_name',
                        'content' => $params['realName']
                    )),
                'to' => $this->admins
            );

            $message = array_merge($this->defaultConfig, $config);
            $response = $mandrill->messages->sendTemplate($template_name, $template_content, $message);
            return $response;
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
        if (env('DEBUG')){
            echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
            throw $e;
        }
    }
}
