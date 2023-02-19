<?php

use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\ProfileController;
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
Route::post("reservation",[ReservationController::class , 'store']);
Route::get('/games',[GameController::class,'getGames']);
Route::get('/reservations',[ReservationController::class,'getReservations']);
Route::post('/logout', function (Request $request) {
    //$request->session()->invalidate();
    // or
     $request->user()->currentAccessToken()->delete();
});
Route::put('/updateProfilePs/{id}',[ProfileController::class,'updateProfilePassword']);
Route::put('/editProfile/{id}',[ProfileController::class,'updateProfile']);