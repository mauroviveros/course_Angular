import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private endPoint: string = environment.endPoint;
  public heroesAPI: string = `${this.endPoint}/heroes`;

  constructor(private http: HttpClient) { };

  getHeroes(termino: string | null = null): Observable<Heroe[]> {
    let params = new HttpParams();
    if (termino) params = params.set("_limit", 5).set("q", termino);
    return this.http.get<Heroe[]>(this.heroesAPI, { params });
  };

  getHeroe(heroeID: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.heroesAPI}/${heroeID}`);
  };

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.heroesAPI, heroe);
  };
  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.heroesAPI}/${heroe.id}`, heroe);
  };
};
