<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/project', [ProjectController::class, 'index']);
Route::get('/project/{id}', [ProjectController::class, 'show'])
    ->whereNumber('limit');
Route::get('/project/limited/{limit}', [ProjectController::class, 'limited'])
    ->whereNumber('limit');
