<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Posts') }}
            </h2>
            <x-link-button href="{{ route('post.create') }}">{{ __('Create') }}</x-link-button>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    @forelse ($posts as $post)
                    <div class="max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow">
                        <div class="flex justify-between">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $post->title }}</h5>
                            <div>
                                <x-link-button href="{{ route('post.edit', $post) }}">{{ __('Edit') }}</x-link-button>
                                <x-delete-button action="{{ route('post.destroy', $post) }}">{{ __('Delete') }}</x-delete-button>
                            </div>
                        </div>
                        <p class="mb-4 font-normal text-gray-700">{{ Str::limit($post->content, 128) }}</p>
                        <x-primary-button>{{ __('Read more') }}</x-primary-button>
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
