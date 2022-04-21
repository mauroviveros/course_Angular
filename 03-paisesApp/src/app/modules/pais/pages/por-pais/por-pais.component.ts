import { Component } from '@angular/core';
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

  constructor(
    private paisService: PaisService
  ){};

  buscar(): void{
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe({
      next: resp =>{
        console.log(resp);
        this.hasError = false;
      },
      error: err =>{
        this.hasError = true;
      }
    });
  };
}
