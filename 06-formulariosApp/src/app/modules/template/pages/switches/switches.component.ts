import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  constructor() { }

  public guardar(form: any): void{
    console.log("Form POST");
    console.log(form);
  };
}
