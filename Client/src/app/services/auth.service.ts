import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import {Usuario} from 'src/app/models/usuario';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  
  constructor( private http: Http) { }

  register(nombre: String, apellido: String, correo: String, clave: String): Promise<any>{
    const data = {nombre: nombre, apellido: apellido, correo: correo, clave: clave};
    return this.http.post(environment.api + '/register', JSON.stringify(data)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }

  login(correo: String, clave: String): Promise<any>{
    const data = {correo: correo, clave: clave};
    return this.http.post(environment.api + '/login', JSON.stringify(data)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }

  loginAdmin(correo: String, clave: String): Promise<any>{
    const data = {correo:correo, clave:clave};
    return this.http.post(environment.api + '/loginAdmin', JSON.stringify(data)).toPromise()
    .then(r=>{
      r.json();
    }).catch(error=>{
      error.json();
    })
  }


}
