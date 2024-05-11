<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
    function home()
    {
        return view('welcome');
    }

    function blog()
    {
        // $posts = Post::get();
        // $post = Post::first();
        // $post = Post::find(26);
        $posts = Post::latest()->paginate();

        return view('blog', ['posts' => $posts]);
        // ->with('posts', $posts) // Alternative
    }

    function post(Post $post)
    {
        return view('post', ['post' => $post]);
    }
}
