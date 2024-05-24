<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
    function home(Request $request)
    {
        $search = trim($request->input('search', ''));
        $posts = $search !== ''
            ? Post::where('title', 'LIKE', "%{$search}%")->latest()->paginate()
            : Post::latest()->paginate();

        return view('welcome')
            ->with('posts', $posts);
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
