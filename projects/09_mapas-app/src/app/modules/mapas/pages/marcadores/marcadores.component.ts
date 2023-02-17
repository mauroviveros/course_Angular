import { Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface Markers{
  center?: [number, number],
  marker?: mapboxgl.Marker,
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

    this.readMarksLocalStorage();
    this.addMarker(true);
  };
  

  addMarker(isInit?: boolean, mark?: Markers): void{
    let color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    if(isInit) color = "#241199";
    if(mark) color = mark.color;

    const marker = new mapboxgl.Marker({
      color,
      draggable: !isInit
    }).setLngLat((mark && mark.center) ? mark.center : this.center).addTo(this.mapa);


    if(isInit) this.markers.unshift({ marker, color });
    else this.markers.push({ marker, color });
    this.saveMarksLocalStorage();
  };

  flyTo(marker: mapboxgl.Marker | undefined): void{
    if (marker === undefined) return;

    this.mapa.flyTo({ center: marker.getLngLat() });
  };

  saveMarksLocalStorage(): void{
    const markers: Markers[] = [];

    this.markers.forEach(mark => {
      if(mark.marker !== undefined){
        const { lng, lat } = mark.marker.getLngLat();
        markers.push({
          color: mark.color,
          center: [ lng, lat ]
        });
      };

    });

    markers.shift();
    localStorage.setItem("markers", JSON.stringify(markers));
  };

  readMarksLocalStorage(): void{
    if(!localStorage.getItem("markers")) return;

    const markers: Markers[] = JSON.parse(localStorage.getItem("markers") || "");
    markers.forEach(mark => this.addMarker(false, mark));
  };
};
