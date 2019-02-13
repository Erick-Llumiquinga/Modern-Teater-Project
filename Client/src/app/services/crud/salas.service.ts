import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  datos = [];
  constructor(private http:Http) { }

  getAll(){
    this.http.get(environment.api + '/salas').toPromise()
    .then( r =>{
       this.datos = r.json();
        console.log("datos dell services",this.datos)
    }).catch(error =>{
        return console.log(error.json());
      });
  }

  create(nombre: String, detalles: String, asientos: String, id_admin: number): Promise<any>{
    const data = {nombre: nombre, detalles:detalles, asientos:asientos, id_admin:id_admin};
    return this.http.post(environment.api + '/salas/create', JSON.stringify(data)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }

}


