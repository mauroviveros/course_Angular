import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private _http: HttpClient
  ){}

  getUsersRRSS(){
    return this._http.get("http://localhost:3000/grafica");
  }
}
