import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http: HttpClient) { }
  getDataEuro<T>(url:string){
    url = 'https://mindicador.cl/api/euro/2022';
    return this._http.get<T[]>(url);
  }
  getDataDolar<T>(url:string){
    url = 'https://mindicador.cl/api/dolar/2022';
    return this._http.get<T[]>(url);
  }
}
