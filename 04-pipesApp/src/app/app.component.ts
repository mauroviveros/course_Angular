import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public nombre: string = "mAuRo";
  public numero: number = 1000;
  public obj = {
    nombre: "Mauro"
  }

  public mostrarNombre(){
    console.table({
      nombre: this.nombre,
      numero: this.numero,
      obj: this.obj
    });
  }
}
