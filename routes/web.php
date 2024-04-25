<?php

use App\Http\Controllers\ArtikelController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ArtikelController::class, 'home']);

Route::get('/privacy-policy', [ ArtikelController::class, 'privacyPolicy' ]);

Route::get('/media-partner', [ ArtikelController::class, 'medpar' ]); 
Route::get('/advertise',[ ArtikelController::class, "advertise"]);
Route::get('/terms-conditions', [ ArtikelController::class, 'termsConditions' ]);

Route::get('/indeks/{search}/{category}/{subcategory}', [ ArtikelController::class, 'index' ]); 
Route::get('/indeks/{search}/{category}/', [ ArtikelController::class, 'index' ]); 
Route::get('/indeks', [ ArtikelController::class, 'index' ]); 

Route::get('/give-away/{search?}',[ ArtikelController::class, "giveAway"]);
Route::get('/artikel/populer', [ ArtikelController::class, 'popularIndex' ]);
Route::get('/artikel/rekomendasi', [ ArtikelController::class, 'rekomendasiIndex' ]);

Route::get('/{category?}/{id}/{title?}', [ArtikelController::class, 'show']);