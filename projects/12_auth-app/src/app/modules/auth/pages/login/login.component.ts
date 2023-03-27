import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ){};

  public login(): void{
    const { email, password } = this.form.value;

    this._authService.login(email, password).subscribe(ok => {
      if(ok) this._router.navigateByUrl("/dashboard");
    })

  }
}
