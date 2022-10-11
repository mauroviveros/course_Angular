import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  public form: FormGroup = this.formBuilder.group({
    producto    : [ null, [ Validators.required, Validators.minLength(3) ] ],
    precio      : [ null, [ Validators.required, Validators.min(0) ] ],
    existencias : [ null, [ Validators.required, Validators.min(1) ] ]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { };

  public campoNoEsValido(campo: string){
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  };
};
