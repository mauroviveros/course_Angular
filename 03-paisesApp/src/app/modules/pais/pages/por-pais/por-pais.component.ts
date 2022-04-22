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

  public buscar(termino: string): void{
    this.termino = termino;

    this.paisService.getPaises(termino, "name").subscribe({
      next: (resp): void =>{ this.paises = resp; this.hasError = false; },
      error: (err): void =>{ this.hasError = true; }
    });
  };

  public sugerencias(termino: string): void{
    this.hasError = false;
    //TODO: crear sugerencia
  };
}
