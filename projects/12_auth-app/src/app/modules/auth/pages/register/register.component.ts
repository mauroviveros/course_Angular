import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public form: FormGroup = this._formBuilder.group({
    name: ["Test 4", [Validators.required]],
    email: ["user4@test.com", [Validators.required, Validators.email]],
    password: ["123456", [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ){};

  public register(): void{
    const { name, email, password } = this.form.value;
    this._authService.register(name, email, password).subscribe((response : string | undefined | boolean) => {
      if(typeof response === "boolean") this._router.navigateByUrl("/dashboard");
      else Swal.fire("Error", response, "error");
    })
  }
}
