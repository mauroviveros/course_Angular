import { Component, inject, input, linkedSignal, signal } from '@angular/core';
import { GifsComponent } from '../../components/gifs/gifs.component';
import { GiphyService } from '../../services/giphy.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Giphy } from '../../interfaces/giphy';

@Component({
  selector: 'app-search',
  imports: [GifsComponent],
  template: `
    <h2 class="text-2xl font-bold mt-5">Buscar Gifs</h2>
    <h3 class="text-sm text-gray-500">Buscar gifs por nombre, descripcion o tags</h3>
    <section clas="flex flex-col gap-4">
      <input
        type="search"
        placeholder="Buscar Gifs"
        class="mt-3 p-2 w-full border border-gray-300 rounded-md"
        (keyup.enter)="search.set(input.value)"
        #input
      />
    </section>

    <section class="pt-5">
      <app-gifs [resource]="searchGifs"></app-gifs>
    </section>
  `,
  styles: ``
})
export default class SearchComponent {
  private readonly giphy = inject(GiphyService);
  readonly search = signal('');

  readonly searchGifs = rxResource({
    request: () => ({ query: this.search() }),
    loader: (params) => this.giphy.getGifs(params.request.query),
    defaultValue: []
  })
}
