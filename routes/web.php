<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ToolController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//PRECISEI PASSAR ALGUM PARÂMETRO, REFERENCIO A ROTA ASSIM
Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Pablo Nogueira']);
});
Route::inertia('/contato', 'Contact');
//NÃO PRECISEI E SÓ QUERO EXIBIR UMA PÁGINA SIMPLES, REFERENCIO A ROTA ASSIM
Route::resource('ferramentas', ToolController::class);
Route::resource('projetos', ProjectController::class);
