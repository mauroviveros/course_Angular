import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  template: `<div id="mapa"></div>`,
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent {
  constructor(){};

  ngOnInit(): void{
    (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11'
    })
  };
}
