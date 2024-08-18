<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\SubTaskController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('tags', TagsController::class);
});