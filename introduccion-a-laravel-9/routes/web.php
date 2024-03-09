<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/lucky-number', fn () => '<h1>Your lucky number is: <u>' . rand(1000, 9999) . '</u>!</h1>');

Route::get('/greet/{name}', fn (string $name) => "<h1>Hi <u>{$name}</u>!</h1>");

Route::get('/search', fn (Request $request) => "<h1>Looking for <u>{$request->get('q', 'anything')}</u>...</h1>");
