<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users=[[
            'firstName'=>'Walid',
            'lastName'=>'DAMOU',
            'gender'=>'male',
            'dateBirth'=>'2001-09-25',
            'address'=>'Mhamid7, Imam Malik IMM E N 13',
            'city'=>'Marrakech',
            'username'=>'walid-damou',
            'phone'=>'+212696628710',
            'email'=>'damou.walid@ensam-casa.ma',
            'password'=>Hash::make('walid'),
            'picture'=>'walid.jpeg'
        ],
        [
            "firstName"=>"Chaima",
            "lastName"=>"IZOUARHN",
            "gender"=>"female",
            "dateBirth"=>"2001-03-25",
            "address"=>"RUE IMM TAGHZOUT TARAST INZEGAN",
            "city"=>"Agadir",
            "username"=>"chaima-izouarhn",
            "phone"=>"+212666666666",
            "email"=>"izouarhn.chaima@ensam-casa.ma",
            "password"=>Hash::make('chaima'),
            "picture"=>"chaima.jpeg"
        ],
        [
            "firstName"=> "Aicha",
            "lastName"=> "Draoui",
            "gender"=> "Female",
            "dateBirth"=> "2002-05-22",
            "address"=> "Sidi othmane",
            "city"=> "Casablanca",
            "username"=> "aicha-draoui",
            "phone"=> "+212666666666",
            "email"=> "draoui.aicha@ensam-casa.ma",
            "password"=> Hash::make('aicha'),
            "picture"=> "aicha.jpeg"
        ]
    ];
    foreach ($users as $user) {
        User::create($user);
    }
    }
}
