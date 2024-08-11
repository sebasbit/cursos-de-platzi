<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cities', function (Blueprint $table) {
            $table->dropTimestamps();
        });

        Schema::table('companies', function (Blueprint $table) {
            $table->dropTimestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropTimestamps();
        });
    }

    public function down(): void
    {
        Schema::table('cities', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('companies', function (Blueprint $table) {
            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->timestamps();
        });
    }
};
