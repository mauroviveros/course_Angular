import { Component, input } from '@angular/core';
import type { Giphy } from '../../interfaces/giphy';

@Component({
  selector: 'app-trending-item',
  imports: [],
  template: `<img class="h-auto max-w-full rounded-lg" [src]="gif().images.original.url" alt="">`,
  styles: ``
})
export class TrendingItemComponent {
  readonly gif = input.required<Giphy>();
}
