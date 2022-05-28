import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

interface Invitado{
  nombre: string;
  genero: string
};
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [`
    :host ::ng-deep button {
      margin-right: .5em;
    }
  `]
})
export class NoComunesComponent implements OnInit {
  public invitados: Invitado[] = [
    { nombre: "Mauro", genero: "masculino" },
    { nombre: "Sol", genero: "femenino" }
  ];
  public invitadoSelect = 0;

  public invitacionMap = {
    "masculino" : "invitarlo",
    "femenino"  : "invitarla"
  };

  public clientes: string[] = ["Maria", "Pedro", "Maria", "Pedro", "Maria", "Pedro"];
  public clientesMap = {
    "=0": "no tenemos ningun cliente",
    "=1": "tenemos un cliente",
    "other": "tenemos # clientes"
  };

  constructor(
    private primengConfig: PrimeNGConfig
  ){};

  ngOnInit(){
    this.primengConfig.ripple = true;
  };

  public changeInvitado(){
    this.invitadoSelect++
    if(this.invitadoSelect == this.invitados.length) this.invitadoSelect = 0;
  };
  public resetClients(){
    this.clientes = ["Maria", "Pedro", "Maria", "Pedro", "Maria", "Pedro"];
  };
  public deleteClient(){
    if(this.clientes.length >= 1) this.clientes.pop();
  };
};
