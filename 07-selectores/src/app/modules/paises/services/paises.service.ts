import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor() { }
}
