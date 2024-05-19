<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return view('post.index')
            ->with('posts', Post::latest()->paginate());
    }

    public function create() {
        return view('post.create');
    }

    public function edit(Post $post) {
        return view('post.edit')
            ->with('post', $post);
    }

    public function destroy(Post $post) {
        $post->delete();
        return redirect()->route('post.index');
    }
}
