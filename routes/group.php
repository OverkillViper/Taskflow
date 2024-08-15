<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskGroupController;

// Route::prefix('group')->group(function () {
    Route::resource('groups', TaskGroupController::class);
// });