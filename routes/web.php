<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return redirect()->route('dashboard');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [FrontendController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/search',    [FrontendController::class, 'search'])->middleware(['auth', 'verified'])->name('search');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/change-avatar', [ProfileController::class, 'changeProfilePicture'])->name('profile.avatar.update');
    Route::post('/remove-avatar', [ProfileController::class, 'removeProfilePicture'])->name('profile.avatar.remove');
});

require __DIR__.'/auth.php';
require __DIR__.'/group.php';
require __DIR__.'/task.php';
require __DIR__.'/tag.php';
