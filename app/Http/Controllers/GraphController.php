<?php

namespace App\Http\Controllers;

use App\Helpers\SecurityHelper;
use App\JSTranslations;
use App\Model\CustomValidator;
use App\Model\JsonResponse;
use App\Model\StatManager;
use Controller\UserController;
use Illuminate\Http\Request;
use App\Model\SkillManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Model\Skill;


class GraphController extends Controller
{

//    public function graph()
//    {
//        echo"pap";
//        $app = new SkillManager();
//        $a = $app->findChildren('54302dd8c7fad5f18236577');
//        return $a;
//    }

    public function graphAction(Request $request){
        $statManager = new StatManager();
        $skillManager = new SkillManager();
        $rootNode = $skillManager->findRootNode();
        $data = array(
            "rootNode"  => $rootNode,
            "title"     => _("Explore"),
            "userClass" => $this->getUserClass($request),
            "skillCount" => $statManager->countLabel("Skill"),
//                "wsUrl" => Config::CROSSBAR_WS_URL
        );
        return view('pages.graph',['data'=> $data]);
    }

//    public function getJSTranslationsAction(){
//
//        $jsTrans = new JSTranslations();
//        header("Content-type: application/javascript");
//        echo "var jt = " . json_encode($jsTrans->getJSTranslations(), JSON_PRETTY_PRINT);
//    }

    private function getUserClass(Request $request){

        $user = SecurityHelper::getUser($request);
        $userClass = "anonymous";
        if ($user){
            $userClass = $user->getRole();
        }
        return $userClass;
    }

    public function goToAction($slug){
        $skillManager = new SkillManager();

        $rootNode = $skillManager->findRootNode();

        $uuid = $skillManager->getUuidFromSlug($slug);

        //will fail if called after findNodePathToRoot
        //cause unknown
        //another workaround : get a new client before calling this one with:
        //\Model\DatabaseFactory::setNewClient();
        $skill = $skillManager->findByUuid($uuid);

        $path = $skillManager->findNodePathToRoot($uuid);

        if (!$path){
            return redirect()->route('fourofour');
//            Router::fourofour();
        }

        $json = new JsonResponse();
        $json->setData($path);

        $data = array(
                "rootNode"  => $rootNode,
                "title"     => $skill->getName(),
                "action"    => "goto",
                "jsonAutoLoad"  => $json->getJson($path, false),
                "slug"      => $slug,
                "userClass" => $this->getUserClass()
        );
        return view('layouts.graph',['data'=>$data]);
//        $view->setLayout("../View/layouts/graph.php");
//        $view->send();
    }


    /**
     * The contact page
     */
    public function contactAction(Request $request){

        $params = array(
            "title" => _("Contact us"),
            "email" => "",
            "realName" => "",
            "message" => ""
        );

        $params['contact_message_sent'] = false;
        if (Session::has('contact_message_sent')){
            Session::forget('contact_message_sent');
            $params['contact_message_sent'] = true;
        }

        //to prefill the form
        if ($user = SecurityHelper::getUser($request)){
            $params['email'] = $user->getEmail();
        }

        if (!empty($_POST)){
            $params['email'] = SecurityHelper::safe($_POST['email']);
            $params['realName'] = SecurityHelper::safe($_POST['real_name']);
            $params['message'] = SecurityHelper::safe($_POST['message']);

            $validator = new CustomValidator();
            $validator->validateMessage($params['message']);
            $validator->validateEmail($params['email']);

            if ($validator->isValid()){
                //send mail to us

                $mailer = new Mailer();
                if ($mailer->sendContactMessage($params)){
                    $_SESSION['contact_message_sent'] = true;
                    $mailer->sendContactMessageConfirmation($params);
                    redirect();
                }
                else {
                    $validator->addError("global", _("A problem occurred while sending your message. Please try again!"));
                }

            }

            if ($validator->hasErrors()){
                $params["errors"] = $validator->getErrors();
            }
        }
        return view('contact',['params'=>$params]);
//        $view = new View("contact.php", $params);
//        $view->send();
    }

}
