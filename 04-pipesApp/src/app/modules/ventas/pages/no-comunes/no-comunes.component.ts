import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

interface Invitado{
  nombre: string;
  genero: string;
  edad: number;
  direccion: string;
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
    { nombre: "Mauro", genero: "masculino", edad: 23, direccion: "Caballito" },
    { nombre: "Sol", genero: "femenino", edad: 22, direccion: "San Miguel" }
  ];
  public invitadoSelect = 0;
  public invitacionMap = {
    "masculino" : "invitarlo",
    "femenino"  : "invitarla"
  };

  public clientes: string[] = ["cliente0", "cliente1", "cliente2", "cliente3", "cliente4"];
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
    this.clientes = ["cliente0", "cliente1", "cliente2", "cliente3", "cliente4"];
  };
  public deleteClient(){
    if(this.clientes.length >= 1) this.clientes.pop();
  };
};
