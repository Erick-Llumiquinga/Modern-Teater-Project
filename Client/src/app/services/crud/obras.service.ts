import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {
  datos = [];
  constructor(private http:Http) { }

  getAll(){
    this.http.get(environment.api + '/obras').toPromise()
    .then( r =>{
      this.datos = r.json();
      return console.log(this.datos);
    }).catch(error =>{
        return console.log(error.json());
      });
  }

  create(nombre: String, detalles: String, ): Promise<any>{
    const data = {nombre: nombre, detalles:detalles};
    return this.http.post(environment.api + '/obras', JSON.stringify(data)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }

}
