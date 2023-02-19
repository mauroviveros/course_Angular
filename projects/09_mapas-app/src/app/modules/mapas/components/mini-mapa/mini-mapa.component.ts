import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  template: `<div #mapa></div>`,
  styles: [
    `
      div{
        width: 100%;
        height: 150px;
        margin: 0px;
      }
    `
  ]
})
export class MiniMapaComponent {
  public mapa: mapboxgl.Map = {} as mapboxgl.Map;

  @Input() public lngLat: [number, number] = [0, 0];
  @ViewChild("mapa") public divMapa: ElementRef = {} as ElementRef;

  ngAfterViewInit(): void{
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      interactive: false,
      zoom: 15
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(this.mapa);
  };
};