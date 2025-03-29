import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GiphyService } from '../../services/giphy.service';
import { GifsComponent } from '../../components/gifs/gifs.component';

@Component({
  selector: 'app-history',
  imports: [GifsComponent],
  template: `
    <section class="pt-5">
      <app-gifs [resource]="gifs"></app-gifs>
    </section>
  `,
  styles: ``
})
export default class HistoryComponent {
  private readonly giphy = inject(GiphyService);
  readonly query = input('');

  readonly gifs = rxResource({
    request: () => ({ query: this.query() }),
    loader: (params) => this.giphy.getGifs(params.request.query),
    defaultValue: []
  })
}
