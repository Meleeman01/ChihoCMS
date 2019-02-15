<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
	protected $fillable = ['title','description'];

    public function chapters(){
    	return $this->hasMany('\App\Models\Chapters');
    }
}
