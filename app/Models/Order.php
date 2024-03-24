<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'product_id',
        'address',
        'phone',
        'name',
        'payment_type',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Car', 'product_id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
