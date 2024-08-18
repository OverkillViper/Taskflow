<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskGroupController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('groups', TaskGroupController::class);
});