<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function (){
    return "Web Services realizado por Grim420";
});

$router->group(['middleware' => []], function() use ($router){
    $router->post('/register', ['uses' => 'AuthController@register']);
    $router->post('/login', ['uses' => 'AuthController@login']);
    $router->post('/loginAdmin',['uses' => 'AuthControllerController@loginAdmin']);
});

$router->group(['middleware' => []], function() use ($router){
    //Crud Personas
    $router->get('/personas',['uses' => 'PersonasController@getAll']);
    $router->get('/personas/update',['uses' => 'PersonasController@put']);
    $router->post('/personas/delete',['uses' => 'PersonasController@delete']);
    //Admin
    $router->get('/admin',['uses' => 'AdminController@getAll']);
    $router->post('/admin/update',['uses' => 'AdminController@put']);
    $router->post('/admin/delete',['uses' => 'AdminController@delete']);
    //Obras
    $router->get('/obras',['uses' => 'ObrasController@getAll']);
    $router->post('/obras/create',['uses' => 'ObrasController@createObra']);
    $router->post('/obras/update',['uses' => 'ObrasController@put']);
    $router->post('/obras/delete',['uses' => 'ObrasController@delete']);
    //Salas
    $router->get('/salas',['uses' => 'SalasController@getAll']);
    $router->post('/salas/create',['uses' => 'SalasController@createSala']);
    $router->post('/salas/update',['uses' => 'SalasController@put']);
    $router->post('/salas/delete',['uses' => 'SalasController@delete']);
    //Hoarios
    $router->get('/horarios',['uses' => 'ReservasController@getAll']);
    $router->post('/horarios/create',['uses' => 'HorariosController@createHorario']);
    $router->post('/horarios/update',['uses' => 'HorariosController@put']);
    $router->post('/horarios/delete',['uses' => 'HorariosController@delete']);
    //Reservas
    $router->get('/reservas',['uses' => 'ReservasController@getAll']);
    $router->post('/reservas/create',['uses' => 'ReservasController@createReservas']);
    $router->post('/reservas/delete',['uses' => 'ReservasController@delete']);
});
