import { Component } from '@angular/core';

enum Genero{
  femenino = "F",
  masculino = "M"
};
interface Persona{
  genero: Genero,
  notificaciones: boolean,
  terminos: boolean
};

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  public persona = {} as Persona;

  constructor() { }

  public guardar(form: any): void{
    console.log("Form POST");
    console.log(form);
  };
}
