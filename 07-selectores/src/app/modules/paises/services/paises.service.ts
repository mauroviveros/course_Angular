import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Pais, PaisSearch } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl: string = "https://restcountries.com/v3.1";
  public regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor(
    private http: HttpClient
  ){ };

  getPaisesPorRegion(region: string): Observable<PaisSearch[]> {
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${region}`, { params: { fields: "name,cca3,translations" } });
  };

  getFronterasPorPais(pais: string): Observable<Pais[]> {
    if(!pais) return of([] as Pais[]);
    return this.http.get<Pais[]>(`${this.baseUrl}/alpha/${pais}`);
  };

};
