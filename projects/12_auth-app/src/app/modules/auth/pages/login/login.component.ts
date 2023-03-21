import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup = this._formBuilder.group({
    email: ["user1@test.com", [Validators.required, Validators.email]],
    password: ["123456", [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private _formBuilder: FormBuilder
  ){};

  public login(): void{
    console.log(this.form.value);
    console.log(this.form.valid);
  }
}
