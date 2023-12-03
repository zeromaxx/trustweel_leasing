<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars);
    }
}
