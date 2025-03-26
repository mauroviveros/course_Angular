import { Component, inject, signal } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { AddComponent } from '../../components/add/add.component';
import { DragonballService } from '../../shared/services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [ListComponent, AddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {
  private readonly DragonballService = inject(DragonballService);
  readonly characters = this.DragonballService.characters;
  readonly addCharacters = this.DragonballService.addCharacters;
  readonly resetCharacters = this.DragonballService.resetCharacters;
}
