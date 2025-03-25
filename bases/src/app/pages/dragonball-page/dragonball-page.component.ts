import { Component, signal } from '@angular/core';
import { Character } from '../../shared/interfaces';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {

  name = signal('Goku');
  power = signal(9000);

  readonly characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 400 },
  ]);

  addCharacter() {
    const character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(list => [...list, character]);
    this.name.set('');
    this.power.set(0);
  }

}
