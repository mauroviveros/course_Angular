import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-sidenav',
  imports: [HeaderComponent, OptionsComponent],
  templateUrl: './sidenav.component.html',
  styles: ``
})
export class SidenavComponent {}
