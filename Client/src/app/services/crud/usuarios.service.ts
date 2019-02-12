import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { environment } from './../../../environments/environment';
import { Usuario } from './../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = environment.api + '/personas/';
personas = [];
;
  constructor(private http: Http) {
  }

  getAll(id?: number){
    if(typeof id === 'undefined'){
      return this.http.get(this.url).toPromise()
        .then(r => {
          return r.json();
        }).catch(e => {
        return e.json();
        });
    }
    return this.http.get(this.url + 'id?=' + id.toString()).toPromise()
    .then(r=>{
      return r.json();
    }).catch(e=>{
      return e.json();
    })
  };

  update(user: Usuario): Promise<any>{
    return this.http.put(environment.api + '/personas', JSON.stringify(user)).toPromise()
    .then(r =>
      r.json()
    ).catch(error => {
      error.json();
    });
  }
}
