import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidenavComponent],
  template: `
    <div class="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div class="flex flex-col relative w-screen">
        <app-sidenav/>

        <div class="min-h-screen h-screen flex-1 ml-64 p-4 text-slate-900 overflow-y-scroll overflow-x-hidden">
          <router-outlet/>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export default class DashboardComponent {}
