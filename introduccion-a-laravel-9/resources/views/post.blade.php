@extends('layout')

@section('content')
    <h1>{{ $post['title'] }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut inventore tenetur omnis nisi qui repellat sequi et,
    magnam, quae incidunt labore dolorem soluta nihil culpa atque commodi assumenda velit.</p>
    <a href="{{ route('blog') }}">Go back</a>
@endsection
