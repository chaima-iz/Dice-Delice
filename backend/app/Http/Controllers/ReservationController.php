<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $r)
    {
        
        $reservationData = $r->validate([
            "reservation_date" => ["required"],
            "start_time" => ["required"],
            "end_time" => ["required"],
            "game" => ["required"],
            "payement" => ["required"],
            "instructions" => ["required"]
        ]);
        
        
        $reservation = Reservation::create([
            "reservation_date" => $reservationData["reservation_date"],
            "start_time" => $reservationData["start_time"],
            "end_time" => $reservationData["end_time"],
            "game" =>$reservationData["game"],
            "payement" => $reservationData["payement"],
            "instructions" => $reservationData["instructions"]
        ]);
        return response($reservation , 201);
        
    }
}
