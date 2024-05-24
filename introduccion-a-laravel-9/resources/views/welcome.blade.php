@extends('layout')

@section('content')
<section class="bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Created with Laravel 🐘❤️</h1>
        <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, perspiciatis animi exercitationem.</p>
    </div>
</section>

<div class="py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900">
                <form action="{{ route('home') }}">
                    <x-input-label for="search" :value="__('Search')" />
                    <x-text-input id="search" type="text" name="search" value="{{ request('search') }}" />
                </form>
                
                @forelse ($posts as $post)
                <div class="w-full p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex justify-between">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $post->title }}</h5>
                        <span class="text-sm text-gray-500">{{ $post->created_at->format('Y/m/d') }}</span>
                    </div>
                    <p class="font-normal text-gray-700">{{ Str::limit($post->content, 128) }}</p>
                    <a href="{{ route('post', $post) }}" class="font-medium text-blue-600 hover:underline">Read more</a>
                </div>
                @empty
                <p class="font-normal text-gray-700">{{ __('There are no publications') }}</p>
                @endforelse

                {{ $posts->links() }}
            </div>
        </div>
    </div>
</div>
@endsection