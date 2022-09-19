import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public heroesAPI: string = "http://localhost:3000/heroes";

  constructor(private http: HttpClient){};

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.heroesAPI);
  };
  getHeroe(heroeID: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.heroesAPI }/${ heroeID }`);
  };
};
