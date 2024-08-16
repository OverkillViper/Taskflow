<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\SubTaskController;

// Route::prefix('group')->group(function () {
Route::resource('tasks', TaskController::class);
Route::resource('subtasks', SubTaskController::class);

Route::get('pending-tasks',                          [TaskController::class, 'pendingTasks'])->name('tasks.pending');
Route::get('completed-tasks',                        [TaskController::class, 'completedTasks'])->name('tasks.completed');
Route::get('missed-tasks',                           [TaskController::class, 'missedTasks'])->name('tasks.missed');

Route::put('tasks/{task}/change-status',             [TaskController::class,    'toggleTaskStatus'])->name('tasks.status.change');
Route::put('tasks/subtasks/{subtask}/change-status', [SubTaskController::class, 'toggleSubTaskStatus'])->name('tasks.subtasks.status.change');

Route::post('tasks/{task}/tags/add',                 [TaskController::class,    'addTagToTask'])->name('tasks.tag.add');
// });