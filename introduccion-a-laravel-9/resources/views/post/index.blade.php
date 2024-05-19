<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Posts') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    @forelse ($posts as $post)
                    <div class="max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $post->title }}</h5>
                        </a>
                        <p class="mb-4 font-normal text-gray-700">{{ Str::limit($post->content, 128) }}</p>
                        <x-primary-button>{{ __('Read more') }}</x-primary-button>
                        <x-delete-button action="{{ route('post.destroy', $post) }}">{{ __('Delete') }}</x-delete-button>
                    </div>
                    @empty
                    <p class="font-normal text-gray-700">{{ __('There are no publications') }}</p>
                    @endforelse

                    {{ $posts->links() }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
