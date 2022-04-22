import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {
  public regiones     : string[]  = ["africa", "americas", "asia", "europe", "oceania"];
  public regionActiva : string    = "";

  public getClass(region: string): string{
    return region == this.regionActiva ? "active" : "";
  };

  public activarRegion(region: string): void{
    this.regionActiva = region;
  };
}
