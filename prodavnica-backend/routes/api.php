<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('addProduct', [ProductController::class, 'addProduct']);
Route::get('list', [ProductController::class, 'list']);
Route::get('listBasket/{ids}', [ProductController::class, 'listBasket']);
Route::delete('delete/{id}', [ProductController::class, 'delete']);
Route::get('product/{id}', [ProductController::class, 'getProduct']);
Route::put('update/{id}', [ProductController::class, 'updateProduct']);
Route::get('search/{id}', [ProductController::class, 'search']);
Route::put('updateUser/{id}', [UserController::class, 'addToBasket']);
Route::get('user/{id}', [UserController::class, 'getUser']);
