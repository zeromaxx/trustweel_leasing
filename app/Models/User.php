<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = "users";

    protected $fillable = [
        'email',
        'password',
        'role',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function hasFavourited(Car $product)
    {
        return $this->favourites()->where('product_id', $product->id)->exists();
    }
    public function favourites()
    {
        return $this->hasMany(Favourite::class);
    }
    public function addFavourite(Car $product, $user_id)
    {
        $this->favourites()->create([
            'product_id' => $product->id,
            'user_id' => $user_id,
        ]);
    }

    public function removeFavourite(Car $product)
    {
        $this->favourites()->where('product_id', $product->id)->delete();
    }


}
