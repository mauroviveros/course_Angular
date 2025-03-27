import { Component } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  icon: IconDefinition;
  label: string;
  route: string;
  sublabel: string;
}

@Component({
  selector: 'app-options',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './options.component.html',
  styles: ``
})
export class OptionsComponent {
  readonly menu : MenuItem[] = [
    { icon: faChartLine, label: 'Trending', sublabel: 'Gifs Populares', route: '/dashboard/trending' },
    { icon: faMagnifyingGlass, label: 'Buscador', sublabel: 'Buscar Gifs', route: '/dashboard/search' }
  ];
}
