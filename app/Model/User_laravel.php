<?php

namespace App\Model;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;


class User_laravel extends Model
{
    protected $table = "users";
    public $timestamps = true;

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password','role','active_flag','email_verification','ip',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

    public function SkillRequest()
    {
        return $this->belongsToMany('App\Model\SkillRequest');
    }

    public function EditorRequest()
    {
        return $this->hasOne('App\Model\EditorRequest','applied_by','id');
    }
}
