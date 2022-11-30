import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    img{ width: 2rem; }
    ul{ position: absolute; width: 96.5%; z-index: 1; }
    li{ cursor: pointer; }
  `]
})
export class PorPaisComponent{
  public termino          : string = "";
  public searchType       : string = "name";
  public hasError         : boolean = false;
  public showSugerencias  : boolean = false;
  public paises           : Country[] = [];
  public paisesSugeridos  : Country[] = [];

  constructor(
    private paisService: PaisService
  ){};

  public buscar(termino: string): void{
    this.termino = termino;
    this.showSugerencias = false;

    this.paisService.getPaises(termino, this.searchType).subscribe({
      next: (resp): void =>{ this.paises = resp; this.hasError = false; },
      error: (err): void =>{ this.hasError = true; }
    });
  };

  public sugerencias(termino: string): void{
    this.hasError = false;
    this.showSugerencias = true;

    this.paisService.getPaisesSugerencias(termino, this.searchType).subscribe({
      next: (resp): void =>{ this.paisesSugeridos = resp; },
      error: (err): void =>{ this.paisesSugeridos = [] }
    })
  };
}
