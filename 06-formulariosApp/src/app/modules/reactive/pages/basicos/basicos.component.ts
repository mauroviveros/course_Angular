import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  public form: FormGroup = this.formBuilder.group({
    producto    : [ 'RTX 4080ti', [ Validators.required, Validators.minLength(3) ] ],
    precio      : [ 1500, [ Validators.required, Validators.min(0) ] ],
    existencias : [ 5, [ Validators.required, Validators.min(0) ] ]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { };
};
