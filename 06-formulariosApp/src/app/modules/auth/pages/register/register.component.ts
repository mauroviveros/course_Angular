import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public regexp_fullname: string = "([a-zA-Z]+) ([a-zA-Z]+)";

  public form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern(this.regexp_fullname)]],
    email: null,
    username: null,
    password: null,
    password_confirm: null
  });

  constructor(
    private formBuilder: FormBuilder
  ) { };

  ngOnInit(): void {
  };

  public hasErrors(field: string, validator: string): boolean {
    if(!this.form.controls[field].touched) return false;
    return this.form.controls[field].errors?.[validator];
  };

  public guardar(): void{
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log(this.form.value);
  };
};
