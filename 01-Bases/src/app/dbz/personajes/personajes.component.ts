import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  public personajes: any[] = [
    { nombre: "Goku", poder: 15000 },
    { nombre: "Vegetta", poder: 8500 }
  ];
}
