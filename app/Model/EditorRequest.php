<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class EditorRequest extends Model
{
    protected $table = "editor_request";

    public function User()
    {
        return $this->belongsTo('App\Model\User');
    }
}
