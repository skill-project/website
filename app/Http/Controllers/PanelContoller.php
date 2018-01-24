<?php

namespace App\Http\Controllers;

use App\Model\SkillManager;
use Illuminate\Http\Request;
use App\Helpers\SecurityHelper as SH;
use App\Model\DiscussionManager;
//use View\AjaxView;


class PanelContoller extends Controller
{
    public function getPanelAction($uuid,Request $request){

        $params = array();
        $user = SH::getUser($request);

        //retrieve the selected skill
        $skillManager = new SkillManager();
        $skill = $skillManager->findByUuid($uuid);
        $params['skill'] = $skill;

        //get rights
        $params['rights'] = SH::getRights($user, $skill->getUuid());

        //parent, for skill creation
        $params['parent'] = $skillManager->findParent($skill);

        //previous names
        $revisions = $skillManager->findRevisionHistory($skill);

        //distinct names only
        $params['previousNames'] = array();
        foreach($revisions as $rev){
            //creation name
            if (empty($rev['previousName'])){
                //$params['previousNames'][]
            }
            elseif (!in_array($rev['previousName'], $params['previousNames']) &&
                $rev['previousName'] != $skill->getName()){
                $params['previousNames'][] = $rev['previousName'];
            }
        }
        //get discussion topics
        $discussionManager = new DiscussionManager();
        $params["topics"] = $discussionManager->getTopics();
        //get previous messages
        $params['messages'] = $discussionManager->getSkillMessages($skill->getUuid());

        //get all Languages (for the translation <select>)
//        ($lc = new \Model\LanguageCode);
//        $languages = $lc->getAllCodes("array", true);
//        $params['languages'] = $languages;
        $params['languages'] = 'en';
//        $view = new AjaxView("panels/panel.blade.php", $params);
//        $view->send();
        return view('panels.panel', ['param'=>$params]);

    }

    /**
     * Retrieves and send the discussion about a skill
     */
    public function reloadDiscussionMessagesAction($uuid){
        $params = array();
        $discussionManager = new DiscussionManager();
        $params['messages'] = $discussionManager->getSkillMessages($uuid);
//        $view = new AjaxView("panels/discussion-messages.blade.php", $params);
//        $view->send();
        return view('panels.discussion-messages', ['param'=>$params]);
    }

    /**
     * Retrieves and send the translations of a skill
     */
    public function reloadTranslationsAction($uuid){
        $params = array();
        $skillManager = new SkillManager;
        $skill = $skillManager->findByUuid($uuid);

        //get all Languages (for the translation <select>)
        $lc = new \Model\LanguageCode();
        $languages = $lc->getAllCodes();
        $params['languages'] = $languages;

        $params['skill'] = $skill;
//        $view = new AjaxView("panels/skill-translations.blade.php", $params);
//        $view->send();
        return view('panels.skill-translations', ['param'=>$params]);
    }

}
