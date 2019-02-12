import { Component, OnInit } from '@angular/core';
import { SocialUser } from'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';
import { AuthServices } from './../services/auth.service';
import { Router } from '@angular/router';

import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  correo: String ='';
  clave: String ='';
  busy: Promise<any>;

  personas = [];
  constructor(public authService:AuthService, public authDataServise: AuthServices, public router: Router) { }


  ngOnInit() {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
    });
  }

  
  login(){
    if(this.correo != "" && this.clave != ""){
    this.busy = this.authDataServise.login(this.correo, this.clave)
    .then(r =>{
      sessionStorage.setItem('isLoggedin', 'true');
      const userData = {id: r.id, nombre: r.nombre};
      sessionStorage.setItem('Usuario', JSON.stringify(userData));
      console.log('Sesion Iniciada')
    }).catch(e =>{
      console.log('No se envian los datos');
      swal({
        title: 'Iniciar Sesion', text: 'Credenciales Incorrectas', icon: 'error'
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

  signInWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void{
    this.authService.signOut();
  }

  guardarUsuarioSL(){
    this.personas = [
      this.user.photoUrl,
      this.user.firstName,
      this.user.lastName,
      this.user.email
    ];

    return console.log(this.personas)
  }
}
