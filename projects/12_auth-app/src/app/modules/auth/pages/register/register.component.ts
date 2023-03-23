import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public form: FormGroup = this._formBuilder.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ){};

  public register(): void{
    console.log(this.form.value);
    console.log(this.form.valid);

    this._router.navigateByUrl("/dashboard");
  }
}
