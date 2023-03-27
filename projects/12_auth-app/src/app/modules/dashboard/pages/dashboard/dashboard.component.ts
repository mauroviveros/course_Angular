import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public get user(){
    return this._authService.user;
  }

  constructor(
    private _router: Router,
    private _authService: AuthService
  ){};

  logout(){
    this._router.navigateByUrl("/auth/login");
  }
}
