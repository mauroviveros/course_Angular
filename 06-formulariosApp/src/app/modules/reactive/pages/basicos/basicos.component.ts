import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    producto    : [ null, [ Validators.required, Validators.minLength(3) ] ],
    precio      : [ null, [ Validators.required, Validators.min(0) ] ],
    existencias : [ null, [ Validators.required, Validators.min(1) ] ]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { };

  ngOnInit(): void {
    this.form.reset({
      producto: "RTX 4080ti",
      precio: 1600
    });
  };

  public campoNoEsValido(campo: string): boolean | null{
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  };

  public guardar(): void{
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log(this.form.value);
    this.form.reset();
  };
};
