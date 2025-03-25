import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../shared/interfaces';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.component.html',
  styles: ``
})
export class AddComponent {
  name = signal('Goku');
  power = signal(9000);
  add = output<Character>();

  addCharacter() {
    this.add.emit({
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    });
    this.name.set('');
    this.power.set(0);
  }
}
