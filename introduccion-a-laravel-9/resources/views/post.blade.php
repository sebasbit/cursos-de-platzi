@extends('layout')

@section('content')
<section class="bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {{ $post->title }}
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
            Posted by {{ $post->user->name }} on {{ $post->created_at->format('Y/m/d') }}
        </p>
    </div>
</section>
<div class="py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900">
                <p>{{ $post->content }}</p>
                <x-link-button href="{{ route('home' )}}" class="mt-4">{{ __('Go back') }}</x-link-button>
            </div>
        </div>
    </div>
</div>
@endsection
