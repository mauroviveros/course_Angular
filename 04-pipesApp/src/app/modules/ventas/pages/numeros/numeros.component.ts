import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent{
  public ventasNetas: number = 2567789.5567;
  public porcentaje : number = 0.48;
  a: number = 0.259;
  b: number = 1.3495;
}
