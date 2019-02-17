<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
	protected $fillable = ['title','description'];

    public function chapters(){
    	return $this->hasMany('\App\Chapters');
    }

    public function pages(){
    	return $this->hasMany('\App\Pages');
    }

    public function user(){
    	return $this->belongsTo('\App\User');
    }
}
