<?php
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\FamilyController;
use App\Http\Controllers\Api\FamilyMemberController;
use App\Http\Controllers\Api\MartyrController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Support\Facades\Route;
Route::get('/dashboard', DashboardController::class);
Route::apiResource('martyrs', MartyrController::class)->only(['index','show']);
Route::apiResource('families', FamilyController::class)->only(['index','show']);
Route::apiResource('members', FamilyMemberController::class)->only(['index','show']);
Route::apiResource('students', StudentController::class)->only(['index','show']);
Route::apiResource('services', ServiceController::class)->only(['index','show']);
Route::get('/health', fn () => ['status'=>'ok','database'=>config('database.default'),'laravel'=>app()->version()]);
