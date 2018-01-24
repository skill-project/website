<?php

namespace App\Helpers;

use App\Model\SkillManager;
use App\Model\User;
use App\Model\UserManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SecurityHelper
{

    private static $rolesHierarchy = array(
        "user" => array("user"),
        "admin" => array("admin", "user"),
        "superadmin" => array("superadmin", "admin", "user")
    );

    private $pepper = "biq0e923kfjw93Fwe90T#gr09w0fdfj9dfw23r2390QGGdjsgiadjob()fasdjk*";

    public static function randomString($length = 50){
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $string = "";
        for($i=0; $i<$length; $i++){
            $charNum = mt_rand(0, strlen($chars)-1);
            $string .= $chars[$charNum];
        }
        return $string;
    }

    public function hashPassword($plainPassword, $userSalt){
        //slow hash
        $hashedPassword = hash("sha512", $plainPassword);
        for($i=0;$i<5000;$i++){
            $hashedPassword = hash("sha512", $this->pepper . $hashedPassword . $userSalt);
        }
        return $hashedPassword;
    }


    public static function checkUsage($maxUsage = 10, $inHowManySeconds = 60){

        //retrieve the api method being called
        $callers=debug_backtrace();
        if (!empty($callers[1]['function'])){
            $call = $callers[1]['function'];
        }

        if (!$call){
            self::forbid("irregular usage");
        }

        $now = time();

        //add the time of this call to session
        $_SESSION['usage'][$call][] = $now;

        //count the number of calls in the last x seconds
        $count = 0;
        foreach($_SESSION['usage'][$call] as $t){
            $since = $now-$inHowManySeconds;
            if ($t > $since){
                $count++;
            }
        }

        //remove old ones
        while ($_SESSION['usage'][$call][0] < $since){
            array_shift($_SESSION['usage'][$call]);
        }

        //above limits for this call ?
        if ($count > $maxUsage){
            self::forbid("irregular usage");
        }
    }


    public static function getRights($user, $skillUuid){
        $rights = array();

        $allRights = array("create_as_child", "create_as_parent", "move",
            "copy", "translate", "discuss", "share", "rename", "delete", "settings", "history");
        $defaultRights = array("create_as_child", "discuss", "share", "history");

        if (!$user){
            return $defaultRights;
        }

        $role = $user->getRole();
        $skillManager = new SkillManager();
        $skillCreationInfo = $skillManager->findCreationInfo( $skillUuid );

        //if admin or superadmin, gives all right
        if ($role == "admin" || $role == "superadmin"){
            $rights = $allRights;
        }
        //if user is the skill's creator, and the skill has been recently created
        //gives all rights also
        else if ($skillCreationInfo['creatorUuid'] == $user->getUuid() &&
            $skillCreationInfo['timestamp'] > (time() - 86400)){
            $rights = $allRights;
        }

        //default, gives create_as_child, discuss and share rights
        else {
            $rights = $defaultRights;
        }
        return $rights;
    }


    public static function lock($minimumRole = "", $skillUuid = null, $askedRight = "",Request $request){
        //if no user is connected, forbid
//        if (!Auth::user()){
        if(!self::userIsLogged()){
            return self::forbid(_("You must be signed in to do that!"));
        }
        //if no minimum role, return true
        else if ($minimumRole == ""){
            return true;
        }
        //role creator is special
        //user must have created the skill
        else if ($minimumRole == "creator"){
            $userRights = self::getRights(self::getUser($request), $skillUuid);
            if (in_array($askedRight, $userRights)){
                return true;
            }
        }

        //else, with a mimimum role
        else {

            $userRole = self::getUser($request)->getRole();

            $authorizedLevels = self::$rolesHierarchy[$userRole];
            //check if user has this capability
            if (!in_array($minimumRole, $authorizedLevels)){
                return self::forbid(_("You can't do that!"));
            }
        }
        return true;
    }

    public static function userIsLogged(){
        if (!empty(Session::get('user')['uuid'])){
            return true;
        }
        return false;
    }

    public static function getRole() {
        if (!empty(Session::get('user')['uuid'])){
            $userManager = new UserManager();
            $user = $userManager->findByUuid(Session::get('user')['uuid']);
            if ($user) return $user->getRole();
            else return false;
        }else return false;
    }

    public static function getApplicationStatus() {
        if (!empty(Session::get('user')['uuid'])){
            $userManager = new UserManager();
            $user = $userManager->findByUuid(Session::get('user')['uuid']);
            if ($user) return $user->getApplicationStatus();
            else return false;
        }else return false;
    }


    public static function getUser(Request $request){
        if (self::userIsLogged()){
            $userManager = new UserManager();
            $user = $userManager->findByEmail(Session::get('user')['email']);
            if ($user){
                self::putUserDataInSession($request, $user);
                return $user;
            }
            else {
                redirect()->route('logout');
//                \Controller\Router::redirect(\Controller\Router::url('logout'));
            }
        }
        return false;
    }
/*
 *
//   public static function getUser(){
//        if (Auth::user()){
//            $user = Auth::user();
//            if ($user){
//                $sessionUser = array(
//                    "uuid" => $user->getUuid(),
//                    "role" => $user->role,
//                    "username" => $user->username,
//                    "email" => $user->email
//                );
//                $_SESSION['user'] = $sessionUser;
//                return $user;
//            }
//            else {
//                redirect()->route('logout');
//            }
//        }
//        return false;
//    }
 */

    public static function putUserDataInSession(Request $request, User $user){
        $sessionUser = array(
            "uuid" => $user->getUuid(),
            "role" => $user->getRole(),
            "username" => $user->getUsername(),
            "email" => $user->getEmail(),
        );
        $request->session()->put('user',$sessionUser);
        Session::save();
    }

    public static function forbid($reason = ""){
        header('HTTP/1.0 403 Forbidden');
        $message = ($reason) ? "Forbidden : $reason" : "Forbidden";
        die($message);
    }


    public static function safe($string){
        return strip_tags($string);
    }

    public static function encode($string){
        return htmlspecialchars($string);
    }

//    public static function setNewCsrfToken(){
//        $token = sha1(uniqid());
//        $_SESSION['csrfToken'] = $token;
//        return $token;
//    }
//
//    public static function getCsrfToken(){
//        if (empty($_SESSION['csrfToken'])){
//            self::setNewCsrfToken();
//        }
//        return $_SESSION['csrfToken'];
//    }
//
//    public static function checkCsrfToken($token){
//        if ($token === self::getCsrfToken()){
//            return true;
//        }
//        return false;
//    }

}
