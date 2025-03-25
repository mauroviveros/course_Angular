import { Component, signal } from '@angular/core';
import { Character } from '../../shared/interfaces';
import { ListComponent } from '../../components/list/list.component';
import { AddComponent } from '../../components/add/add.component';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [ListComponent, AddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {
  readonly characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 }
  ]);

  addCharacters(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
