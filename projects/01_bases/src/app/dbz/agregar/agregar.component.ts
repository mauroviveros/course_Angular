import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  public nuevo: Personaje = { nombre: "", poder: 0 };

  constructor(
    private dbzService: DbzService
  ){};

  agregar(): void{
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: "", poder: 0 };
  };
}
