import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user: User = {} as User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
    ) { };

  public login() {
    this.authService.login().subscribe(response => {
      if(response.usuario != this.user.usuario) this.snackBar.open("Usuario incorrecto ❌❌", undefined, { duration: 1500 });
      else{
        this.snackBar.open("Sesión iniciada correctamente ⚡⚡", undefined, { duration: 1500 });
        this.router.navigate(["./heroes"]);

      }
    });
  };

};
