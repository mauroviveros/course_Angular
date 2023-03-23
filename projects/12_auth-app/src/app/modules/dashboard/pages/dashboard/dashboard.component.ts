import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public user = {};

  constructor(
    private _router: Router
  ){}

  logout(){
    this._router.navigateByUrl("/auth/login");
  }
}
