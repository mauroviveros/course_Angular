import { Component, inject } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { GifsComponent } from '../../components/gifs/gifs.component';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-trending',
  imports: [GifsComponent],
  template: `<app-gifs [resource]="gifs"></app-gifs>`,
  styles: ``
})
export default class TrendingComponent {
  private readonly giphy = inject(GiphyService);

  readonly gifs = rxResource({
    loader: () => this.giphy.getTreindingGifs(),
    defaultValue: []
  });
}
