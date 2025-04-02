import { Component, input } from '@angular/core';
import { GridDefaultComponent } from './grid-default.component';
import { GridMasonryComponent } from './grid-masonry.component';
import { Giphy } from '../../../interfaces/giphy';

@Component({
  selector: 'app-grid',
  imports: [GridDefaultComponent, GridMasonryComponent],
  template: `
    @if(mode() === 'default') { <app-grid-default [gifs]="gifs()"/> }
    @else { <app-grid-masonry [gifs]="gifs()"/> }
  `,
  styles: ``
})
export class GridComponent {
  readonly gifs = input.required<Giphy[]>();
  readonly mode = input<'default' | 'masonry'>('default')
}
