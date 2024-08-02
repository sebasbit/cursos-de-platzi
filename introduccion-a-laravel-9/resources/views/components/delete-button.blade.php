@props(['action'])

<form action="{{ $action }}" method="POST" class="inline-flex">
    @csrf
    @method('DELETE')
    <x-danger-button onclick="return confirm('{{ __('Are you sure about that?') }}')">
        {{ $slot }}
    </x-danger-button>
</form>