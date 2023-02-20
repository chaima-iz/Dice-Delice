<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReservationsTableSeeder extends Seeder
{
    public function run()
    {
        $reservations=[[
            'reservation_date' => now(),
            'start_time' => '12:00',
            'end_time' => '14:00',
            'id_game' => 3,
            'payement' => 'Cash',
            'instructions' => 'Please reserve a table near the window if possible',
            'id_user' => 1,
        ],
        [
            'reservation_date' => now(),
            'start_time' => '16:00',
            'end_time' => '18:00',
            'id_game' => 1,
            'payement' => 'Paypal',
            'instructions' => "I'm vegetarian, so please ensure that there are vegetarian options available on the menu",
            'id_user' => 3,
        ],
        [
            'reservation_date' => now(),
            'start_time' => '21:00',
            'end_time' => '00:00',
            'id_game' => 2,
            'payement' => 'Cash',
            'instructions' => 'I will need an audio-visual equipment for a presentation',
            'id_user' => 2,
        ]
    ];
    foreach ($reservations as $reservation) {
        Reservation::create($reservation);
    }
    }
}
