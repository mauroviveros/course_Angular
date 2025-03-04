import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styles: [`button { padding: 5px; margin: 5px 10px; width: 75px; }`]
})
export class CounterComponent {
  public counter: number = 0;
public counterSignal = signal<number>(0);

  increment(value: number): void {
    this.counter += value;
    this.counterSignal.update(counter => counter + value);
  }

  reset(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
