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
            "id_game" => ["required"],
            "instructions" => [],
            "payement" => ["required"],
            "id_user" => ["required"],
        ]);

        $reservation = Reservation::create([
            "reservation_date" => $reservationData["reservation_date"],
            "start_time" => $reservationData["start_time"],
            "end_time" => $reservationData["end_time"],
            "payement" => $reservationData["payement"],
            "instructions" => isset($reservationData["instructions"]) ? $reservationData["instructions"] : null,
            "id_game" => $reservationData["id_game"],
            "id_user" => $reservationData['id_user'],
        ]);
        return response()->json(
            ['message' => 'reservation saved', 'data' => $reservation],
            200
        );
    }

   
    public function getReservations($id_user)
    {
        $reservations = Reservation::where('id_user', $id_user)
            ->join('games', 'games.id', '=', 'reservations.id_game')
            ->select('reservations.*', 'games.name')
            ->get();
        return response()->json($reservations);
    }
}
