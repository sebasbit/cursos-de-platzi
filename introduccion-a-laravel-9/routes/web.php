<?php

use App\Http\Controllers\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home']);
// Route::view('/blog'); // Alternative for basic pages
Route::get('/blog', [PageController::class, 'blog'])->name('blog');
Route::get('/blog/{post:slug}', [PageController::class, 'post'])->name('post');

// Alternative
// Route::controller(PageController::class)->group(function () {
//     Route::get('/', 'home');
//     Route::get('/blog', 'blog')->name('blog');
//     Route::get('/blog/{slug}', 'post')->name('post');
// });

Route::get('/lucky-number', fn () => '<h1>Your lucky number is: <u>' . rand(1000, 9999) . '</u>!</h1>');
Route::get('/greet/{name}', fn (string $name) => "<h1>Hi <u>{$name}</u>!</h1>");
Route::get('/search', fn (Request $request) => "<h1>Looking for <u>{$request->get('q', 'anything')}</u>...</h1>");
