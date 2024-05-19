<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return view('post.index')
            ->with('posts', Post::latest()->paginate());
    }
    public function destroy(Post $post) {
        $post->delete();
        return redirect()->route('post.index');
    }
}
