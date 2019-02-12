import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UsuariosService} from "../services/crud/usuarios.service"
import swal from 'sweetalert';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: Usuario;

  nombre: String = '';
  apellido: String = '';
  correo: String = '';
  clave: String = '';
  verificarClave: String = '';
  busy: Promise<any>; 

  constructor(public userService: UsuariosService) { 
    this.user = new Usuario();
  }

  ngOnInit() {
    this.clave = '';
    this.verificarClave = '';
  }

  getUser(){
    this.userService.getAll(JSON.parse(sessionStorage.getItem('Usuario')).id)
    .then(r => {
      this.user = r as Usuario;
    })
    .catch(e=>{
      console.log(e);
    })
  }


  /*putUsuario(){
    if(this.nombre != "", this.apellido != "", this.correo != "", this.clave != "", this.verificarClave != ""){
      if(this.clave === this.verificarClave){
      this.busy = this.userService.update(this.nombre, this.apellido, this.correo, this.clave)
    .then(r =>{
      swal({
        title: "Genial", text: "Datos editados!", icon: "success"
      })
    })
    .catch(e=>{
      swal({
        title: "Ups", text: "Fallo al editar", icon: "error"
      });
    });
      }
      else{
        swal({
          title: "Ups", text: "La contraseña no es igual", icon: "error"
        });
      }
    }
    else{
      swal({
        title: "Ups", text: "Campos vacios", icon: "error"
      });
    }
  }*/
}
