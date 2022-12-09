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

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.mapaWrapper.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -58.444216881596624, -34.60446199121021 ],
      zoom: this.zoomLevel
    });
  };

  zoom(direction: string): void {
    switch(direction){
      case 'in': this.mapa.zoomIn(); break;
      case 'out': this.mapa.zoomOut(); break;
    };

    this.zoomLevel = this.mapa.getZoom();
  };

};
