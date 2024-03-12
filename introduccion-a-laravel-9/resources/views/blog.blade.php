@extends('layout')

@section('content')
    <h1>Lastest posts</h1>
    @foreach ($posts as $post)
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">{{ $post['title'] }}</h5>
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae magni aliquid quis? Eius,
                    obcaecati laboriosam nostrum nemo minima quia accusamus aut quas voluptate! Obcaecati ipsum aut porro...</p>
                <a href="{{ route('post', $post['slug']) }}" class="btn btn-primary">Read</a>
            </div>
        </div>
    @endforeach
@endsection
