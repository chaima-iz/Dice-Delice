<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    function login(Request $request){
        $request->validate([
            "email" => ["required"],
            "password" => ["required"],
        ]);
        $user = User::where('email', $request->email)->first();
       if (! $user || ! Hash::check($request->password, $user->password)){
            return response([
                'message'=>['user not found']
            ],404);
        }

        $token = $user->createToken('appToken')->plainTextToken;
        $response = [
            'user'=>$user,
            'token'=>$token
        ];
        return response($response , 201);
    }
    function signUp(Request $request){
        $userData = $request->validate([
            "firstName" => ["required" , "string"],
            "lastName" => ["required" , "string"],
            "gender" => ["required" , "string"],
            "dateBirth" => ["required"],
            "address" => ["required"],
            "city" => ["required" , "string"],
            "username" => ["required" , "string"],
            "phone" => ["required" , "string"],
            "email" => ["required" , "email"],
            "password" => ["required" , "string" , "confirmed"],
            "picture" => ["required" , "string" ]
        ]);
        $user = User::create([
            "firstName" => $userData["firstName"],
            "lastName" => $userData["lastName"],
            "gender" => $userData["gender"],
            "dateBirth" =>$userData["dateBirth"],
            "address" => $userData["address"],
            "city" => $userData["city"],
            "username" => $userData["username"],
            "phone" => $userData["phone"],
            "email" => $userData["email"],
            "password" => Hash::make($userData["password"]),
            "picture"=>$userData["picture"]
        ]);
        return response($user , 201);
    }
}
