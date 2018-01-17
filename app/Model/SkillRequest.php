<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SkillRequest extends Model
{
    protected $table = "skill_requests";

    public function User()
    {
        return $this->hasMany('App\Model\User');
    }
}
