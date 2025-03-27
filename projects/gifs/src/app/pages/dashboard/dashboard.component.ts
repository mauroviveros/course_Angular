import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {}
