import { Component, OnInit } from '@angular/core';
import { ObrasService} from "../../services/crud/obras.service";

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
styleUrls: []
})
export class ObrasComponent implements OnInit {

  nombre: string = '';
  detalles: string = '';
  busy: Promise<any>;
  constructor(public obraService: ObrasService) { }
  data = [];
  ngOnInit() {
    this.nombre = '';
    this.detalles = '';
  }

  crear(){
    if (this.nombre != "" && this.detalles !="") {
      this.busy = this.obraService.create(this.nombre, this.detalles)
        .then(r => {
          swal({
            title: 'Genial!', text: 'Obra Registrada', icon: 'success'
          });
        }).catch(e => {
          swal({
            title: 'Ups!', text: 'Error al registrar', icon: 'error'
          });
        });
    }
    else{
      swal({
        title: 'Ups!', text: 'Campos vacios', icon: 'error'
      });
      console.log('error al enviar datos campos vacios');
    }
  }


  editar(){
  this.obraService.getAll();
  this.data = this.obraService.datos;
  }
}
