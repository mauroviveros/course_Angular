import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private pattern_fullname: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  private pattern_email: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern(this.pattern_fullname)]],
    email: [null, [Validators.required, Validators.pattern(this.pattern_email)]],
    username: [null, [Validators.required, this.noPuedeSerAdmin]],
    password: null,
    password_confirm: null
  });

  constructor(
    private formBuilder: FormBuilder
  ) { };

  ngOnInit(): void {
  };


  public noPuedeSerAdmin(control: FormControl) {
    const value : string = control.value?.trim().toLowerCase();

    if(value === "admin") return { noAdmin: true }
    return null;
  };

  public hasErrors(field: string, validator: string): boolean {
    if(!this.form.controls[field].touched) return false;
    return this.form.controls[field].errors?.[validator];
  };

  public guardar(): void {
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log(this.form.value);
  };
};
