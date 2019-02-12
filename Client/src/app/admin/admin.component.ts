import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/crud/usuarios.service";
import { AuthServices } from './../services/auth.service';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  correo = "";
  clave = "";
  datos = [];
  busy: Promise<any>;
  constructor( public userServices:UsuariosService, public  authDataServise:AuthServices,  public router: Router) { }

  ngOnInit() {
    this.correo = "";
    this.clave = "";
  }

  loginAdmin(){
    if(this.correo != "" && this.clave != ""){
      this.busy = this.authDataServise.loginAdmin(this.correo, this.clave)
      .then(r =>{
        sessionStorage.setItem('isLoggedin', 'true');
        const userData = {id: r.id, nombre: r.nombre};
        sessionStorage.setItem('Usuario', JSON.stringify(userData));
        console.log('Sesion Iniciada Administrador')
      }).catch(e =>{
        console.log('No se envian los datos');
        swal({
          title: 'Ups!', text: 'Credenciales Incorrectas', icon: 'error'
        })
        .then(response =>{
          sessionStorage.clear();
          this.router.navigate['/'];
          console.log('el error persiste')
        });
      });
      }
      else{
      swal({
        title: "Ups!", text: "Campos Vacios", icon: "error"
      })
  
    }
  }
  get(){
    this.userServices.getAll();
    this.datos = this.userServices.personas;
  }
}
