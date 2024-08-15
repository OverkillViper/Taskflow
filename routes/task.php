<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\SubTaskController;

// Route::prefix('group')->group(function () {
Route::resource('tasks', TaskController::class);
Route::resource('subtasks', SubTaskController::class);

Route::put('tasks/{task}/change-status',             [TaskController::class, 'toggleTaskStatus'])->name('tasks.status.change');
Route::put('tasks/subtasks/{subtask}/change-status', [SubTaskController::class, 'toggleSubTaskStatus'])->name('tasks.subtasks.status.change');

// });