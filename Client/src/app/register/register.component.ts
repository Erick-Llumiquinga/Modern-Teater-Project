import { Component, OnInit } from '@angular/core';
import { SocialUser } from'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';
import { AuthServices } from './../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String = '';
  apellido: String = '';
  correo: String = '';
  clave: String ='';
  busy: Promise<any>;

  constructor(public router:Router, public authDataServise:AuthServices, public authServices:AuthService) { }

  ngOnInit() {
  }

  register() {
    if (this.nombre != "" && this.apellido != "" && this.correo != "" && this.clave !="") {
      this.busy = this.authDataServise.register(this.nombre, this.apellido, this.correo, this.clave)
        .then(r => {
          swal({
            title: 'Registrar', text: 'Registro Exitoso', icon: 'success'
          });
        }).catch(e => {
          swal({
            title: 'Registrar', text: 'Registro Fallido', icon: 'error'
          });
        });
    }
    else{
      swal({
        title: 'Registrar', text: 'Campos vacios', icon: 'error'
      });
      console.log('error al enviar datos campos vacios');
    }
  }

}
