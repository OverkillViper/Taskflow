<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\SubTaskController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('tasks', TaskController::class);
    Route::resource('subtasks', SubTaskController::class);

    Route::put('tasks/{task}/change-status',             [TaskController::class,    'toggleTaskStatus'])->name('tasks.status.change');
    Route::put('tasks/subtasks/{subtask}/change-status', [SubTaskController::class, 'toggleSubTaskStatus'])->name('tasks.subtasks.status.change');

    Route::post('tasks/{task}/tags/add',                 [TaskController::class,    'addTagToTask'])->name('tasks.tag.add');
    Route::delete('tasks/tags/{tasktag}/remove',         [TaskController::class,    'removeTagFromTask'])->name('tasks.tag.remove');
});