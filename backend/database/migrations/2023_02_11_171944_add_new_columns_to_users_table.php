<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('firstName');
            $table->string('lastName');
            $table->enum('gender',['male','female']);
            $table->date('dateBirth');
            $table->string('address');
            $table->string('city');
            $table->string('username')->unique();
            $table->string('phone');
            $table->string('picture');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('firstName');
            $table->dropColumn('lastName');
            $table->dropColumn('gender');
            $table->dropColumn('dateBirth');
            $table->dropColumn('address');
            $table->dropColumn('city');
            $table->dropColumn('username');
            $table->dropColumn('phone');
            $table->dropColumn('picture');
        });
    }
};
