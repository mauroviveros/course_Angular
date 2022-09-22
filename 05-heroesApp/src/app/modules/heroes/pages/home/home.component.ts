import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

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
    this.router.navigate(["./login"]);
  };

};
