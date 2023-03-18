import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  public text1: string = "Mauro Daniel Viveros";

  public form: FormGroup = this._formBuilder.group({
    name: ["", [Validators.required]]
  });

  public get validClassForm(){

    return this.form.touched && this.form.invalid ? 'was-validated' : '';
  };

  constructor(
    private _formBuilder: FormBuilder
  ){}

  updateTexto(): void{
    this.text1 = "Mensaje de Error 2";
    console.log(this.text1);
  }
}
