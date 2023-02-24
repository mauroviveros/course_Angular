import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: "./menu.component.html",
  styles: [`li{ cursor: pointer; }`]
})
export class MenuComponent {
  public menu: MenuItem[] = [
    { ruta: "/graficos/barras", texto: "Barras" },
    { ruta: "/graficos/barras-doble", texto: "Barras Dobles" },
    { ruta: "/graficos/dona", texto: "Dona" },
    { ruta: "/graficos/dona-http", texto: "Dona HTTP" }
  ];
}
