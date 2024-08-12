<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/project');

Route::controller(ProjectController::class)->group(function () {
    Route::get('/project', 'index')->name('project.index');
    Route::get('/project/create', 'create')->name('project.create');
    Route::post('/project', 'store')->name('project.store');
    Route::get('/project/{id}', 'show')->name('project.show')->whereNumber('limit');
    Route::get('/project/limited/{limit}', 'limited')->whereNumber('limit');
});
