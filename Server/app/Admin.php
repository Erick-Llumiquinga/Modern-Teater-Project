<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Admin extends Model 
{
        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'correo', 
        'clave'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'clave'
    ];

    public function obras(){
        return $this->hasOne('App\Obras.php');
    }

    public function horarios(){
        return $this->hasOne('App\Horarios');
    }

    public function salas(){
        return $this->hasOne('App\Salas.php');
    }

    public function reservas(){
        return $this->hasOne('App\Reservas');
    }
}
?>
