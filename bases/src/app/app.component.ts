import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <section class="mx-5 mt-2">
      <router-outlet />
    </section>
  `,
})
export class AppComponent {
  title = 'bases';
}
