<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Persona extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 
        'apellido', 
        'correo',
        'clave'
    ];

    protected $hidden = [
        'clave',
    ];

    public function usuario(){
        return $this->hasOne('App\Usuario');
    }
}               
?>
