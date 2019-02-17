<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapters extends Model
{
    protected $guarded =[];

    public function pages(){
        return $this->hasMany('\App\Pages');
    }

    public function book(){
        return $this->belongsTo('\App\Books');
    }
    public function user(){
        return $this->belongsTo('\App\User');
  }
}
