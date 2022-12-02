import { Component } from '@angular/core';

interface MenuItem{
  url: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: MenuItem[] = [
    { url: 'mapas/fullscreen',  name: 'Pantalla Completa' },
    { url: 'mapas/zoom-range',  name: 'Zoom' },
    { url: 'mapas/marcadores',  name: 'marcadores' },
    { url: 'mapas/propiedades', name: 'Propiedades' }
  ];
}
