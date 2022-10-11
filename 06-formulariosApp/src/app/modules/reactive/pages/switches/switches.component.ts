import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {
  public form: FormGroup = this.formBuilder.group({
    terminos  : [ null, Validators.requiredTrue ],
    persona   : this.formBuilder.group({
      genero          : [ null, Validators.required ],
      notificaciones  : [ null ]
    })
  });

  constructor(
    private formBuilder: FormBuilder
  ) { };

  guardar(): void {
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log((this.form.get('persona') as FormArray).value);
    console.log((this.form.get('terminos') as FormArray).value);

    this.form.reset();
  };

};
