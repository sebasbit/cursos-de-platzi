@extends('layout')

@section('content')
    <h1>Lastest posts</h1>
    @foreach ($posts as $index => $post)
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">{{ $index + 1 }} - {{ $post->title }}</h5>
                <p class="card-text">{{ Str::limit($post->content, 128) }}</p>
                <blockquote class="blockquote mb-0">
                    <footer class="blockquote-footer">
                        Posted by {{ $post->user->name }} on {{ $post->created_at->format('Y-m-d') }}
                    </footer>
                </blockquote>
                <a href="{{ route('post', $post->slug) }}" class="btn btn-primary">Read</a>
            </div>
        </div>
    @endforeach

    {{ $posts->links() }}
@endsection
