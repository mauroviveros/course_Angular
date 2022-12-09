import { Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  template: `<div id="mapa"></div>`,
  styles: []
})
export class FullScreenComponent {
  constructor(){};

  ngOnInit(): void{
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -58.444216881596624, -34.60446199121021 ],
      zoom: 18
    });
  };

};
