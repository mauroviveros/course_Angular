import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  styleUrls: ['./app.component.css'],
  template: `
    <button (click)="acumular(base);">{{ "+" + base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">{{ "-" + base }}</button>
  `
})
export class ContadorComponent{
  public numero : number = 10;
  public base   : number = 5;

  public acumular(valor: number): void{
    this.numero += valor;
  };
}
