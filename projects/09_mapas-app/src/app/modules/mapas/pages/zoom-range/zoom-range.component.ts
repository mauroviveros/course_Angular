import { Component, ViewChild, ElementRef } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss']
})
export class ZoomRangeComponent {
  @ViewChild('mapa')
  public mapaWrapper: ElementRef = {} as ElementRef;
  public mapa: mapboxgl.Map = {} as mapboxgl.Map;

  public zoomLevel: number = 18;
  public center: [number, number] = [ -58.444216881596624, -34.60446199121021 ];

  ngAfterViewInit(){
    this.mapa = new mapboxgl.Map({
      container: this.mapaWrapper.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('move', (event) => {
      const {lng, lat } = event.target.getCenter();
      this.center = [lng, lat];
    });

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() > 18) this.mapa.zoomTo(18);
    });
  };

  ngOnDestroy(){
    this.mapa.off('move', () => {});
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
  };

  zoom(direction: string): void {
    switch(direction){
      case 'in': this.mapa.zoomIn(); break;
      case 'out': this.mapa.zoomOut(); break;
    };
  };

  updateZoom(value: string): void{
    this.mapa.zoomTo(Number(value));
  }

};
