import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl: string = "https://restcountries.com/v3.1";
  public regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor(
    private http: HttpClient
  ){ };

  getPaisesPorRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${region}`, { params: { fields: "name,cca3,translations" } });
  };

  getPaisesPorCodigo(codigo: string): Observable<Pais[]> {
    if(!codigo) return of([] as Pais[]);
    return this.http.get<Pais>(`${this.baseUrl}/alpha/${codigo}`, { params: { fields: "name,cca3,translations,borders" } }).pipe(
      switchMap(pais =>{
        if(!pais.borders || pais.borders.length == 0) return of([] as Pais[]);
        return this.http.get<Pais[]>(`${this.baseUrl}/alpha`, { params: { codes: pais.borders.join(',').toLowerCase() || '', fields: "name,cca3,translations" } });
      })
    );
  };

};
