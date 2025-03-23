<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::get('/', [HomeController::class, 'index']);


Route::get('/users/show', [UserController::class, 'show']);
