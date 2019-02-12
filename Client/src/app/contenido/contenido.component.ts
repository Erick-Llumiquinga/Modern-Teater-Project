import { Component, OnInit,  } from '@angular/core';
import { ObrasService } from './../services/crud/obras.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {


  constructor( public obrasService:ObrasService) { 

  }

  ngOnInit() {
   //this.getObras();
  }

  /*getObras(){
    this.obrasService.get()
    .then(r =>{
      this.obras = r as Obras;
    }).catch(e => console.log(e));
  }*/

}
