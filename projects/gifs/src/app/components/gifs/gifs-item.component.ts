import { Component, input } from '@angular/core';
import type { Giphy } from '../../interfaces/giphy';

@Component({
  selector: 'app-gifs-item',
  imports: [],
  template: `<img class="h-auto max-w-full rounded-lg" [src]="gif().images.original.url" [alt]="gif().alt_text" decoding="async" loading="lazy" />`,
  styles: ``
})
export class GifsItemComponent {
  readonly gif = input.required<Giphy>();
}
