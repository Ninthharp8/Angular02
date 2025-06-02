import { Injectable } from '@angular/core';
import { Busqueda } from '../interfaces/busqueda';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BusquedaService {

  // variables
  cachedValues: Array<{ [query: string]: Busqueda }> = [];

  constructor(private http:HttpClient) {this.http = http; }

  busqueda = (query: string) => { 
    let promise = new Promise <Busqueda>((resolve, reject) => { 
      this.http.get('https://api.github.com/search/repositories?q=' + query)
      .toPromise()
      .then((response)=> {
        resolve(response as Busqueda)
      },(error)=> {
        reject(error);
      })
      
    })
    return promise;
  }
}
