import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  datos = [];
  constructor(private http:Http) { }

  getAll(){
    this.http.get(environment.api + '/horarios').toPromise()
    .then( r =>{
       this.datos = r.json();
        console.log("datos dell services",this.datos)
    }).catch(error =>{
        return console.log(error.json());
      });
  }

  create(horario: String, id_admin: number): Promise<any>{
    const data = {horario: horario, id_admin:id_admin};
    return this.http.post(environment.api + '/horarios/create', JSON.stringify(data)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }
}
