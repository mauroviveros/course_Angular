import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [ { nombre: "Goku", poder: 15000 }, { nombre: "Vegetta", poder: 8500 } ];
  // [ { nombre: "Goku", poder: 15000 }, { nombre: "Vegetta", poder: 8500 } ]

  get personajes(): Personaje[]{ return this._personajes; };

  constructor(){};

  agregarPersonaje(personaje:Personaje): void{
    console.log(personaje);
    this._personajes.push(personaje);
    console.log(this._personajes);
    console.log(this.personajes);
  };
}
