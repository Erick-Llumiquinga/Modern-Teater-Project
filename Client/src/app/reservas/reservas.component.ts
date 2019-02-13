import { Component, OnInit } from '@angular/core';
import { ObrasService } from './../services/crud/obras.service';
import { HorariosService } from './../services/crud/horarios.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor(public obrasServices:ObrasService, public horarioServices:HorariosService) { }
  obras = [];
  horarios = [];
  ngOnInit() {
  }

  getObras(){
    this.obrasServices.getAll()
    this.obras = this.obrasServices.datos
    console.log("Datos traidos" + this.obras);
  }

  getHorarios(){
    this.horarioServices.getAll()
    this.horarios = this.horarioServices.datos
  }

}
