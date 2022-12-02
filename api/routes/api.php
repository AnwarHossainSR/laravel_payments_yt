<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'loginUser'])->name('login');
Route::get('/products', [ProductController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/products/{id}', [ProductController::class, 'details']);
    Route::post('/checkout/{id}', [PaymentController::class, 'checkout']);
});
Route::get('/checkout/success', [PaymentController::class, 'success'])->name('checkout.success');
Route::get('/checkout/cancel', [PaymentController::class, 'cancel'])->name('checkout.cancel');
