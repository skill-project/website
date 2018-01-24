<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\SkillRequest;
use Illuminate\Support\Facades\Route;


class SkillController extends Controller
{
    public function index()
    {
        $app = new SkillRequest();
        $table = $app::all();
        return $table;
    }
}
