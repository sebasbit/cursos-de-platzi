<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/project');

Route::controller(ProjectController::class)->group(function () {
    Route::get('/project', 'index')->name('project.index');
    Route::get('/project/{id}', 'show')->name('project.show')->whereNumber('id');
    Route::get('/project/create', 'create')->name('project.create');
    Route::post('/project', 'store')->name('project.store');
    Route::get('/project/edit/{id}', 'edit')->name('project.edit')->whereNumber('id');
    Route::put('/project', 'update')->name('project.update');
    Route::delete('/project', 'destroy')->name('project.destroy');
    Route::get('/project/limited/{limit}', 'limited')->whereNumber('limit');
});
