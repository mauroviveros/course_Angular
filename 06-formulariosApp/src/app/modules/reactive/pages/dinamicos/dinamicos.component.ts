import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  public form: FormGroup = this.formBuilder.group({
    nombre    : [ null, [ Validators.required, Validators.minLength(3) ] ],
    favoritos : this.formBuilder.array([
      [ "Metal Gear", Validators.required ],
      [ "Death Stranding", Validators.required ]
    ], Validators.required)
  });

  get favoritos(): AbstractControl[] {
    return (this.form.get('favoritos') as FormArray).controls;
  };

  constructor(
    private formBuilder: FormBuilder
  ) { };


  public campoNoEsValido(campo: string): boolean | null{
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  };

  public guardar(): void {
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log(this.form.value);
    this.form.reset();
  };

};
