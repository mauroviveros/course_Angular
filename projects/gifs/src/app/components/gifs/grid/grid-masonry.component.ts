import { Component, computed, input } from '@angular/core';
import { Giphy } from 'projects/gifs/src/app/interfaces/giphy';

@Component({
  selector: 'app-grid-masonry',
  imports: [],
  template: `


<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  @for (gifs of masonry(); track $index) {
    <div class="grid gap-4">
      @for (gif of gifs; track $index) {
        <img class="h-auto max-w-full rounded-lg" [src]="gif.images.original.url" [alt]="gif.alt_text"/>
      }
    </div>
  }
  `,
  styles: ``
})
export class GridMasonryComponent {
  readonly gifs = input.required<Giphy[]>();
  readonly masonry = computed(() => {
    return this.gifs().reduce<Giphy[][]>((array, gif, index) => {
      const col = index % 4;
      if (!array[col]) array[col] = [];
      array[col].push(gif);
      return array;
    }, []);
  });
}
