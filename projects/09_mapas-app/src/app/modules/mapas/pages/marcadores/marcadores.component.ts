import { Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  template: `<div class="mapa-wrapper" #mapa></div>`,
  styles: []
})
export class MarcadoresComponent {
  @ViewChild('mapa')
  public mapaWrapper: ElementRef = {} as ElementRef;
  public mapa: mapboxgl.Map = {} as mapboxgl.Map;


  ngAfterViewInit(): void{
    this.mapa = new mapboxgl.Map({
      container: this.mapaWrapper.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -58.444216881596624, -34.60446199121021 ],
      zoom: 15
    });

    const markerHtml: HTMLElement = document.createElement("div");
    markerHtml.innerHTML = "Hola Mundo";

    new mapboxgl.Marker({ element: markerHtml })
      .setLngLat([ -58.444216881596624, -34.60446199121021 ])
      .addTo(this.mapa)

    new mapboxgl.Marker()
      .setLngLat([ -58.4571984, -34.6091915 ])
      .addTo(this.mapa)
  };
}
