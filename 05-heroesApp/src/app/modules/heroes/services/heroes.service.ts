import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient){};

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.heroesAPI);
  };
  getHeroe(heroeID: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.heroesAPI }/${ heroeID }`);
  };
};
