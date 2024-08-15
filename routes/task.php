<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

// Route::prefix('group')->group(function () {
    Route::resource('tasks', TaskController::class);
// });