import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  public form: FormGroup = new FormGroup({
    producto: new FormControl('RTX 4080ti')
  });

  constructor() { };
};
