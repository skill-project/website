<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use App\Model\EditorRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;


class EditorController extends Controller
{
    public function index()
    {
        $app = new EditorRequest();
        $table = $app::all();
        return $table;
    }

    public function create(Request $request)
    {
        $editor_req = new EditorRequest();
        if($request->isMethod('post'))
        {
            $validator = Validator::make($request->all(), [
                'real_name' => 'required|max:255',
                'country' => 'required|max:255',
                'languages_ip' => 'required',
                'update_freq' => 'required',
                'interests' => 'required',
                'motiv' => 'required',
                'job' => 'required',
            ]);

            if ($validator->fails()) {
                return view('pages.apply')
                    ->withErrors($validator)
                    ->withInput();
            }

            $editor_req->applied_by = Auth::user()->id;
            $editor_req->real_name = $request->real_name;
            $editor_req->country = $request->country;
            $editor_req->languages = $request->languages_ip;
            $editor_req->promised_activity_scale = $request->update_freq;
            $editor_req->skills_of_interest = $request->interests;
            $editor_req->reason = $request->motiv;
            $editor_req->prof_activity = $request->job;
            $editor_req->application_status = '2';
            $editor_req->save();
            return view('pages.apply');
        }
        else
        {
            return view('pages.apply');
        }
    }
}
