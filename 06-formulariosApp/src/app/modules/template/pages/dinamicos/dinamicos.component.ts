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
  public nuevoFavorito: string = "";
  public persona: Persona = {
    nombre: "Mauro",
    favoritos: []
  };

  constructor() { }

  public guardar(form: any): void{
    console.log("Form POST");
    console.log(form);
  };

  public agregarFavorito(nombre: string): void{
    if(!nombre) return;

    let lastFavorito = this.persona.favoritos[this.persona.favoritos.length - 1];
    let id = lastFavorito ? (lastFavorito.id + 1) : 1;

    this.persona.favoritos.push({ id, nombre });
    this.nuevoFavorito = "";
  };

  public borrarFavorito(index: number): void{
    this.persona.favoritos.splice(index, 1);
  }
}
