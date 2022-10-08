import { Component } from '@angular/core';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
};

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent{

  public persona: Persona = {
    nombre: "Mauro",
    favoritos: [
      { id: 1, nombre: "Metal Gear" },
      { id: 2, nombre: "DeathStranding" }
    ]
  };

  constructor() { }

  public guardar(form: any): void{
    console.log("Form POST");
    console.log(form);
  };

  public borrarFavorito(index: number): void{
    this.persona.favoritos.splice(index, 1);
  }
}
