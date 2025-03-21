import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {
  readonly name = signal<string>('Ironman');
  readonly age = signal<number>(45);

  readonly description = computed(() => {
    return `${this.name()} is ${this.age()} years old`;
  })


  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
