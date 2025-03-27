import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-sidenav',
  imports: [HeaderComponent, OptionsComponent],
  template: `
    <div id="menu" class="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
      <app-header/>
      <app-options/>
    </div>
  `,
  styles: ``
})
export class SidenavComponent {}
