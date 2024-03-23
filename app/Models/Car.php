<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $table = "cars";
    public $timestamps = false;

    protected $fillable = [
        'name',
        'price',
        'stock',
        'model',
        'image',
    ];

}
