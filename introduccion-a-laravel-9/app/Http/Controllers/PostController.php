<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    function index() {
        return view('post.index', [
            'posts' => Post::latest()->paginate()
        ]);
    }
}
