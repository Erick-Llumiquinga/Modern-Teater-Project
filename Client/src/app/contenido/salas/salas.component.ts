import { Component, OnInit } from '@angular/core';
import { SalasService } from './../../services/crud/salas.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor(public salaServices:SalasService) { }
  salas = [];
  sala = [];
  nombre: String ='';
  detalles: String ='';
  asientos: number ;
  ngOnInit() {
  }

  getSalas(){
    this.salaServices.getAll();
    this.salas = this.salaServices.datos;
    this.salas.forEach(obj =>{
      this.sala = this.salas
    });
    console.log("Despues del for", this.sala);
  }


}
