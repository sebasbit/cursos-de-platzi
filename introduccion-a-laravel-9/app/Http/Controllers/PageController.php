<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    function home()
    {
        return view('welcome');
    }

    function blog()
    {
        $posts = [
            ['title' => 'Learn PHP from scratch', 'slug' => 'learn-php-from-scratch'],
            ['title' => 'Learn Laravel from scratch', 'slug' => 'learn-laravel-from-scratch'],
        ];

        return view('blog', ['posts' => $posts]);
        // ->with('posts', $posts) // Alternative
    }

    function post(string $slug)
    {
        $post = ['title' => ucfirst(str_replace('-', ' ', $slug))];
        return view('post', ['post' => $post]);
    }
}
