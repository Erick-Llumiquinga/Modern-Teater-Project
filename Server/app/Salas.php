<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salas extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        '', 
        'nombre', 
        'detalles',
        'asientos',
        'id_admin' 
    ];

    public function admin(){
        return $this->belongsTo('App\Admin.php');
    }

    public function reservas(){
        return $this->hasOne('App\Reservas.php');
    }
}
?>
