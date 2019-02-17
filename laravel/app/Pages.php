<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pages extends Model
{
    protected $guarded =[];

    public function image(){
    	return $this->hasOne('\App\ComicImages');
    }

    public function user(){
    	return $this->belongsTo('\App\User');
    }

    public function book(){
    	return $this->belongsTo('\App\Books');
    }

    public function chapter(){
    	return $this->belongsTo('\App\Chapters');
    }
}
