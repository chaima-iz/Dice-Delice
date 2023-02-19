<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function updateProfilePassword(Request $request, $id){
        $infos = $request->validate([
            
            "currentPassword"=> ["required"],
            "newPassword"=> ["required"],
            "confirmPassword"=> ["required"],
        ]);

        $user = User::where('id', $id)->first();

        if (Hash::check($infos["currentPassword"], $user->password)){
            if($infos["newPassword"]==$infos["confirmPassword"]){
                $user->password = Hash::make($infos["newPassword"]);
                $user->save();

                return response(
                    ['message' => 'Password updated', 'data' => $user]
                ,200);
            }
            
        }

        return response()->json(
            ['message' => 'error'],
             404
            );
    }
    public function updateProfile(Request $request, $id){
        $userUpdate = $request->validate([
            "firstName" => ["required"],
            "lastName" => ["required"],
            "dateBirth" => ["required"],
            "phone" => ["required"],
            "email" => ["required"],
            "address" => ["required"]
        ]);

        $user = User::find($id);

        $user->firstName = $userUpdate['firstName'];
        $user->lastName = $userUpdate['lastName'];
        $user->dateBirth = $userUpdate['dateBirth'];
        $user->phone = $userUpdate['phone'];
        $user->email = $userUpdate['email'];
        $user->address = $userUpdate['address'];

        $user->save();

        return response()->json(
            ['message' => 'User updated', 'data' => $user],
             200
            );
    }
}
