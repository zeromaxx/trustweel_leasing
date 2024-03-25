<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Car extends Model
{
    protected $table = "cars";
    use SoftDeletes;

    protected $fillable = [
        'name',
        'price',
        'stock',
        'model',
        'image',
        'year',
        'gearbox',
        'fuel',
        'space',
    ];
    public function favouritedBy()
    {
        return $this->belongsToMany(User::class, 'favourites');
    }

}
