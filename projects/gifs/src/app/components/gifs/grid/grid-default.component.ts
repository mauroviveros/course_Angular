import { Component, input } from '@angular/core';
import { GifsItemComponent } from '../gifs-item.component';
import { Giphy } from 'projects/gifs/src/app/interfaces/giphy';

@Component({
  selector: 'app-grid-default',
  imports: [GifsItemComponent],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      @for (gif of gifs(); track $index) {
        <app-gifs-item [gif]="gif"/>
      }
    </div>
  `,
  styles: ``
})
export class GridDefaultComponent {
  readonly gifs = input.required<Giphy[]>();
}
