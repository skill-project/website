<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Contact;
use Illuminate\Support\Facades\Validator;

class HomeController_laravel extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function apply()
    {
        return view('pages.apply');
    }

//    public function contact(Request $request)
//    {
//        $contat_message_sent = false;
//        if($request->isMethod('post'))
//        {
//            $validator = Validator::make($request->all(), [
//                'real_name' => 'required|max:255',
//                'email' => 'required|string|email|max:255',
//            ]);
//
//            if ($validator->fails()) {
//                return view('pages.contact',["contat_message_sent"=>$contat_message_sent])
//                    ->withErrors($validator)
//                    ->withInput();
//            }
//
//            $contact = new Contact();
//            $contact->name = $request->real_name;
//            $contact->email = $request->email;
//            $contact->message = $request->message;
//            $contact->save();
//            $contat_message_sent = true;
//            return view('pages.contact',["contat_message_sent"=>$contat_message_sent]);
//        }
//        else
//        {
//            return view('pages.contact',["contat_message_sent"=>$contat_message_sent]);
//        }
//
//
//    }


}
