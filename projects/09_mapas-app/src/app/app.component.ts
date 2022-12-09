import { Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  ngOnInit(): void{
    (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;
  };
}
