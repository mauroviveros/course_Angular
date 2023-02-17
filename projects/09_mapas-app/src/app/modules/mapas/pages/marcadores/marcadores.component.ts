import { Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

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

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));


    const newMarker = new mapboxgl.Marker({
      color: isInit ? "#241199" : color,
      draggable: !isInit
    }).setLngLat(this.center).addTo(this.mapa);
  }

  goMarker(): void{

  };
};
