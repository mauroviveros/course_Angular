import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  public form: FormGroup = this.formBuilder.group({
    producto    : ['RTX 4080ti'],
    precio      : [1500],
    existencias : [5]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { };
};
