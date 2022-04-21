import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlAPI: string = "https://restcountries.com/v3.1";


  constructor(
    private http: HttpClient
  ){};

  public buscarPais(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlAPI}/name/${termino}`);
  };
  public buscarCapital(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlAPI}/capital/${termino}`);
  };

  public buscarRegion(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlAPI}/region/${termino}`);
  };

  public getPaisPorAlpha(id: string): Observable<Country>{
    return this.http.get<Country>(`${this.urlAPI}/alpha/${id}`);
  }
}
