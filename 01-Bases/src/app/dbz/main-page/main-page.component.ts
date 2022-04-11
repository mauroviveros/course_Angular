import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
};
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public personajes: Personaje[] = [
    { nombre: "Goku", poder: 15000 },
    { nombre: "Vegetta", poder: 8500 }
  ];

  public nuevo: Personaje = {
    nombre: "",
    poder: 0
  };

  public agregar(): void{
    if(this.nuevo.nombre.trim().length === 0) return;

    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: "", poder: 0 };
  };
}
