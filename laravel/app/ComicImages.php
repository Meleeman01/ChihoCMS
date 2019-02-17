<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ComicImages extends Model
{
    protected $guarded =[];

    public function pages(){
    	$this->belongsTo('\App\Pages');
    }
}
