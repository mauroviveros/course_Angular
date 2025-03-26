import { Component, input } from '@angular/core';
import { Character } from '../../shared/interfaces';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
  readonly characters = input.required<Character[]>();
}
