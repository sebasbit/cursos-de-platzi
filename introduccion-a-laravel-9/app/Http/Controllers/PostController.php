<?php

namespace App\Http\Controllers;

class PostController extends Controller
{
    function index() {
        return view('post.index');
    }
}
