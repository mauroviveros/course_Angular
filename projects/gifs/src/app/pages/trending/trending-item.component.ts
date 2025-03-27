import { Component, input } from '@angular/core';

@Component({
  selector: 'app-trending-item',
  imports: [],
  template: `<img class="h-auto max-w-full rounded-lg" [src]="gif()" alt="">`,
  styles: ``
})
export class TrendingItemComponent {
  readonly gif = input.required();
}
