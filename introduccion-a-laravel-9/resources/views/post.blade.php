@extends('layout')

@section('content')
    <h1>{{ $post->title }}</h1>
    <p>{{ $post->content }}</p>
    <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer">
            Posted by {{ $post->user->name }} on {{ $post->created_at->format('Y-m-d') }}
        </footer>
    </blockquote>
    <a href="{{ route('blog') }}">Go back</a>
@endsection
