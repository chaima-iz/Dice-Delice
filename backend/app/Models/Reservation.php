<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'reservation_date',
        'start_time',
        'end_time',
        'id_game',
        'payement',
        'instructions',
        'id_user'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
