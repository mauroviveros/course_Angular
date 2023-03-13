import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  public form: FormGroup = this._formBuilder.group({
    name: ["", [Validators.required]]
  });

  public get validClassForm(){

    return this.form.touched && this.form.invalid ? 'was-validated' : '';
  };

  constructor(
    private _formBuilder: FormBuilder
  ){}
}
