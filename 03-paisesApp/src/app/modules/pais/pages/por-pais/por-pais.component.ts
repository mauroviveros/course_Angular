import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  public termino: string = "";
  public hasError: boolean = false;
  public paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ){};

  buscar(): void{
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp): void =>{
        this.paises = resp;
        console.log(this.paises);
        this.hasError = false;
      },
      error: (err): void =>{
        this.hasError = true;
      }
    });
  };
}
