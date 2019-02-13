import { Component, OnInit } from '@angular/core';
import { HorariosService } from './../../services/crud/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor(public horarioServices:HorariosService) { }
  horarios = [];
  horario = [];
  Horario: String = '';
  ngOnInit() {
  }

  getHorarios(){
    this.horarioServices.getAll()
    this.horarios = this.horarioServices.datos;
    this.horarios.forEach(obj =>{
      this.horario = this.horarios;
    });
    console.log('Despues del for ', this.horario);
  }
}
