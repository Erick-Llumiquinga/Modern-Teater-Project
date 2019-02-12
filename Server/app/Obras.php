<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Obras extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 
        'detalles',
        'id_admin'
    ];

    public function reservas(){
        return $this->hasOne('App\Reservas.php');
    }

    public function admin(){
        return $this->belongsTo('App\Admin');
    }
}
?>