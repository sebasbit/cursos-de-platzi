<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        return view('post.index')
            ->with('posts', Post::latest()->paginate());
    }

    public function create() {
        return view('post.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:posts,slug',
            'content' => 'required',
        ]);

        $post = $request->user()->posts()->create([
            'title' => $request->title,
            'slug' => $request->slug,
            'content' => $request->content,
        ]);

        return redirect()->route('post.edit', $post);
    }

    public function edit(Post $post)
    {
        return view('post.edit')
            ->with('post', $post);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:posts,slug,' . $post->id,
            'content' => 'required',
        ]);

        $post->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'content' => $request->content,
        ]);

        return redirect()->route('post.edit', $post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('post.index');
    }
}
