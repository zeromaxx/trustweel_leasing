<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AppController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/cars', [AppController::class, 'index']);
Route::get('/cars/{id}', [AppController::class, 'details']);
Route::post('/register', [AppController::class, 'register']);
Route::post('/login', [AppController::class, 'login']);
Route::post('/logout', [AppController::class, 'logout']);
Route::post('/contact', [AppController::class, 'contact']);
