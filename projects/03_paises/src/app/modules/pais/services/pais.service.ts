import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getPaises(termino: string, servicio: string): Observable<Country[]>{
    const params = new HttpParams().set("fields", "name,flags,altSpellings,capital,population,cca2");
    return this.http.get<Country[]>(`${this.urlAPI}/${servicio}/${termino}`, { params });
  };
  public getPaisesSugerencias(termino: string, servicio: string): Observable<Country[]>{
    const params = new HttpParams().set("fields", "name,flags,altSpellings,cca2");
    return this.http.get<Country[]>(`${this.urlAPI}/${servicio}/${termino}`, { params });
  };

  public getPais(id: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlAPI}/alpha/${id}`);
  }
}
