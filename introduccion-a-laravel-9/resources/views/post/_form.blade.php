<form action="{{ isset($post) ? route('post.update', $post) : route('post.store') }}" method="POST">
    @csrf
    @isset($post)
        @method('PUT')
    @endisset
    <div>
        <x-input-label for="post_title" :value="__('Title')" />
        <x-text-input id="post_title" class="block mt-1 w-full" type="text" name="title" :value="old('title', isset($post) ? $post->title : '')" required autofocus />
        <x-input-error :messages="$errors->get('title')" class="mt-2" />
    </div>
    <div class="mt-4">
        <x-input-label for="post_content" :value="__('Content')" />
        <x-text-area id="post_content" class="block mt-1 w-full" name="content" rows="5" required>
            {{ old('content', isset($post) ? $post->content : '') }}
        </x-text-area>
        <x-input-error :messages="$errors->get('content')" class="mt-2" />
    </div>
    <div class="mt-4">
        <x-primary-button>{{ __('Save') }}</x-primary-button>
        <x-link-button href="{{ route('post.index' )}}" class="mt-4">{{ __('Go back') }}</x-link-button>
    </div>
</form>