<?php

<<<<<<< HEAD
use App\Http\Controllers\ReservationController;
=======
use App\Http\Controllers\GameController;
>>>>>>> 2315be993e6d3e1e7472c1dfd39e17826f95b66a
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post("login",[UserController::class , 'login']);
Route::post("signUp",[UserController::class , 'signUp']);
<<<<<<< HEAD
Route::post("reservation",[ReservationController::class , 'store']);
=======
Route::get('/games',[GameController::class,'getGames']);
>>>>>>> 2315be993e6d3e1e7472c1dfd39e17826f95b66a
