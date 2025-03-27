import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  readonly company = environment.company;

  get companyName(){
    return this.company.name.split(' ');
  }

}
