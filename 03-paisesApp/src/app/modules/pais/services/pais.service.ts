import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlAPI: string = "https://restcountries.com/v3.1";


  constructor(
    private http: HttpClient
  ){};

  buscarPais(termino: string): Observable<any>{
    return this.http.get(`${this.urlAPI}/name/${termino}`);
  };
}
