import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

interface Invitado{
  nombre: string;
  genero: string
};
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  public invitado1: Invitado = {
    nombre: "Mauro",
    genero: "masculino"
  };
  public invitado2: Invitado = {
    nombre: "Sol",
    genero: "femenino"
  };

  public invitacionMap = {
    "masculino" : "invitarlo",
    "femenino"  : "invitarla"
  }

  constructor(
    private primengConfig: PrimeNGConfig
  ){};

  ngOnInit(){
    this.primengConfig.ripple = true;
  };
};
