import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styles: [`button { padding: 5px; margin: 5px 10px; width: 75px; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counterLegacy: number = 0;
  public counter = signal<number>(0);


  constructor(){
    // setInterval(() => {
    //   console.log('tick');
    //   this.increment(1);
    // }, 2000);
  }


  increment(value: number): void {
    this.counterLegacy += value;
    this.counter.update(counter => counter + value);
  }

  reset(): void {
    this.counterLegacy = 0;
    this.counter.set(0);
  }
}
