import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl: string = "https://restcountries.com/v3.1/region";


  public regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor(
    private http: HttpClient
  ){ };

  getPaisesPorRegion(region: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.baseUrl}/${region}`, { params: { fields: "name,cca3,translations" } });
  };
};
