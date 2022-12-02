<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'loginUser'])->name('login');
Route::get('/products', [ProductController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/products/{id}', [ProductController::class, 'details']);
});
