import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private router: Router,
    private authService: AuthService
  ){ };

  get user(){
    return this.authService.userActive;
  };

  ngOnInit(): void{ };

  logout(): void {
    this.authService.logout();
    this.router.navigate(["./login"]);
  };

};
