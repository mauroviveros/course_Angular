import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent implements OnInit {
  public regiones     : string[]  = ["africa", "america", "asia", "europe", "oceania"];
  public regionActiva : string    = "";
  public paises       : Country[] = [];

  constructor(
    private paisService: PaisService
  ){};

  ngOnInit(){
    this.activarRegion(this.regiones[0]);
  }

  public getClass(region: string): string{
    return region == this.regionActiva ? "active" : "";
  };

  public activarRegion(region: string): void{
    if(region === this.regionActiva) return;

    this.regionActiva = region;

    this.paisService.getPaises(region, "region").subscribe({
      next: (resp): void =>{ this.paises = resp; },
    });
  };
}
