import { computed, effect, Injectable, linkedSignal, signal } from '@angular/core';
import { Character } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  readonly characters = linkedSignal<Character[]>(computed(() => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
  }));

  constructor(){
    effect(() => {
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });
  }

  resetCharacters() {
    this.characters.update(() => []);
  }

  addCharacters(character: Character) {
    this.characters.update(list => [...list, character]);
  }

}
