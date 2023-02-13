<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameResource;
use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getGames()
    {
        $games = Game::all();
        return response()->json($games);
    //    return GameResource::collection(Game::all());
    }

   

    
  
}
