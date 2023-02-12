<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class games extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'maxPlayers', 'minPlayers', 'description', 'rules', 'difficulty', 'category', 'picture'

    ];
}
