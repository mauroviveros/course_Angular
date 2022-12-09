import { Component, ViewChild, ElementRef } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  template: `<div class="mapa-wrapper" #mapa></div>`,
  styles: []
})
export class FullScreenComponent {
  @ViewChild('mapa') public mapaWrapper: ElementRef = {} as ElementRef;


  ngAfterViewInit(): void{
    new mapboxgl.Map({
      container: this.mapaWrapper.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -58.444216881596624, -34.60446199121021 ],
      zoom: 18
    });
  };

};
