import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {
  public regiones     : string[]  = ["africa", "americas", "asia", "europe", "oceania"];
  public regionActiva : string    = "";

  constructor(){};

  public activarRegion(region: string): void{
    this.regionActiva = region;
  };
}
