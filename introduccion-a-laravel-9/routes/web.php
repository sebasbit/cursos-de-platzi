<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/lucky-number', fn () => '<h1>Your lucky number is: <u>' . rand(1000, 9999) . '</u>!</h1>');

Route::get('/greet/{name}', fn (string $name) => "<h1>Hi <u>{$name}</u>!</h1>");

Route::get('/search', fn (Request $request) => "<h1>Looking for <u>{$request->get('q', 'anything')}</u>...</h1>");

// Route::view('/blog'); // Alternative for basic pages
Route::get('/blog', function () {
    $posts = [
        ['title' => 'Learn PHP from scratch', 'slug' => 'learn-php-from-scratch'],
        ['title' => 'Learn Laravel from scratch', 'slug' => 'learn-laravel-from-scratch'],
    ];

    return view('blog', ['posts' => $posts]);
        // ->with('posts', $posts) // Alternative
})->name('blog');

Route::get('/blog/{slug}', function (string $slug) {
    $post = ['title' => ucfirst(str_replace('-', ' ', $slug))];
    return view('post', ['post' => $post]);
})->name('post');
