<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_persona');
            $table->foreign('id_persona')->references('id')->on('personas');
            $table->unsignedInteger('id_obra');
            $table->foreign('id_obra')->references('id')->on('obras');
            $table->unsignedInteger('id_horario');
            $table->foreign('id_horario')->references('id')->on('horarios');
            $table->unsignedInteger('id_sala');
            $table->foreign('id_sala')->references('id')->on('salas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
}
