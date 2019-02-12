<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservas extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        '', 
        'id_persona', 
        'id_obra', 
        'id_horario',
        'id_sala'
    ];

    public function personas(){
        return $this->belongsTo('App\Personas.php');
    }

    public function obras(){
        return $this->belongsTo('App\Obras.php');
    }

    public function horarios(){
     return $this->belongsTo('App\Horarios');
    }

    public function salas(){
        return $this->belongsTo('App\Salas');
    }
}
?>
