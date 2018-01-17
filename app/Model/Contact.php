<?php

namespace App\Model;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;


class Contact extends Model
{
    protected $table = "contact";
    public $timestamps = true;

    protected $fillable = [
        'real_name', 'email', 'message'
    ];
}

