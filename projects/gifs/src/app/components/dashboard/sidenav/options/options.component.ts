import { Component, effect, inject } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faChartLine, faHistory, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { GiphyService } from 'projects/gifs/src/app/services/giphy.service';

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
  readonly history = inject(GiphyService).history;
  readonly faHistory = faHistory;

  readonly menu : MenuItem[] = [
    { icon: faChartLine, label: 'Trending', sublabel: 'Gifs Populares', route: '/dashboard/trending' },
    { icon: faMagnifyingGlass, label: 'Buscador', sublabel: 'Buscar Gifs', route: '/dashboard/search' }
  ];
}
