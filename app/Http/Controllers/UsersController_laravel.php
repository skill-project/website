<?php

namespace App\Http\Controllers;

use App\Model\User;
use App\Model\EditorRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

class UsersController_laravel extends Controller
{
    public function index()
    {
        $app = new User();
        $table = $app::all();
        return $table;
    }

    public function register()
    {
        return view('auth.register');
    }

    public function login()
    {
        return view('auth.login');
    }

    public function project()
    {
        return view('pages.project');
    }

    public function profile($username)
    {
        return view('pages.profile',["username"=>$username]);
    }

    public function profileUpdate(Request $request, $id)
    {
        $user = User::find($id);

        if ($request->isMethod('post')) {
            $validator = Validator::make($request->all(), [
                'country' => 'required|max:255',
                'language_ip' => 'required',
            ]);

            if ($validator->fails()) {
                return view('pages.edit_profile')
                    ->withErrors($validator)
                    ->withInput();
            }
            $user->EditorRequest->country = $request->country;
            $user->EditorRequest->languages = $request->language_ip;
            $user->EditorRequest->skills_of_interest = $request->interests;
            $user->EditorRequest->prof_activity = $request->job;
            $user->EditorRequest->save();
            return redirect('/profile');
        }
        else {
            return view('pages.edit_profile');
        }
    }

    public function changePassword(Request $request, $id)
    {
        $user = User::find($id);
        if ($request->isMethod('post')) {
            $validator = Validator::make($request->all(), [
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return view('pages.profile')
                    ->withErrors($validator)
                    ->withInput();
            }
            $user->password = bcrypt($request->password);
            $user->save();
            return view('pages.profile');
        }
        else {
            return view('modals.change_password');
        }
    }

    public static function getUserClass()
    {
        if(Auth::guest()):
            $userClass = "anonymous";
        else:
            $id = Auth::user()->id;
            $user = User::find($id);
            $userClass = $user->role;
        endif;
        return $userClass;
    }
}
