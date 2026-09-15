<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'نظام الشهيد الإلكتروني',
        'backend' => 'Laravel '.app()->version(),
        'database' => config('database.default'),
        'api' => '/api/health',
    ]);
});
