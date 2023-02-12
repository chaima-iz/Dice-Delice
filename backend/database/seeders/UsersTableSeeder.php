<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
        DB::table('users')->insert([
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
        ]);
    }
}
