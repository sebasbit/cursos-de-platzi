@extends('layout')

@section('content')
<h1 class="text-5xl text-center font-extrabold mb-5 dark:text-white">Projects</h1>

<div class="px-5 mb-5 relative overflow-x-auto">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Relationships
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Execution date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Is active?
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($projects as $project)
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $project->name }}
                    </th>
                    <td class="px-6 py-4">
                        <ul>
                            <li><span class="font-bold">City:</span> {{ $project->city->name }}</li>
                            <li><span class="font-bold">Company:</span> {{ $project->company->name }}</li>
                            <li><span class="font-bold">User:</span> {{ $project->user->name }}</li>
                        </ul>
                    </td>
                    <td class="px-6 py-4">
                        {{ $project->execution_date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ $project->is_active ? 'Yes' : 'No' }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="{{ route('project.edit', ['id' => $project->id]) }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>    
</div>
@endsection