import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <section class="mx-5 mt-2">
      <router-outlet />
    </section>
  `,
})
export class AppComponent {
  title = 'bases';
}
