import { Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface Markers{
  marker: mapboxgl.Marker,
  color: string
};

@Component({
  selector: 'app-marcadores',
  templateUrl: "./marcadores.component.html",
  styleUrls: ["./marcadores.component.scss"]
})
export class MarcadoresComponent {
  @ViewChild('mapa')
  public mapaWrapper: ElementRef = {} as ElementRef;
  public mapa: mapboxgl.Map = {} as mapboxgl.Map;

  public center: [number, number] = [ -58.444216881596624, -34.60446199121021 ];
  public markers: Markers[] = [];


  ngAfterViewInit(): void{
    this.mapa = new mapboxgl.Map({
      container: this.mapaWrapper.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 15
    });

    this.mapa.on('move', (event) => {
      const { lng, lat } = event.target.getCenter();
      this.center = [lng, lat];
    });

    this.addMarker(true);
  };
  

  addMarker(isInit?: boolean): void{
    const color = isInit ? "#241199" : "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const marker = new mapboxgl.Marker({
      color: color,
      draggable: !isInit
    }).setLngLat(this.center).addTo(this.mapa);

    this.markers.push({ marker, color });
  };

  goMarker(): void{

  };
};
