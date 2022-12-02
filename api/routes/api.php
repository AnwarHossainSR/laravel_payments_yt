<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PlanController;
use Illuminate\Support\Facades\Route;




Route::middleware(['cors','web'])->group(function () {
    Route::post('/login', [AuthController::class, 'loginUser'])->name('login');

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/plans', [PlanController::class, 'getPlans']);
        Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('/checkout/{id}', [PaymentController::class, 'checkout']);
        Route::post('/plan', [PlanController::class, 'createPlan']);
    });


    Route::get('/checkout/success', [PaymentController::class, 'success'])->name('checkout.success');
    Route::get('/checkout/cancel', [PaymentController::class, 'cancel'])->name('checkout.cancel');
});
