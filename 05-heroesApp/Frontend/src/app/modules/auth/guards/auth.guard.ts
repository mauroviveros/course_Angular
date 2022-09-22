import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private authService: AuthService) { };

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated()
      .pipe(map(isAuth => isAuth ? isAuth : this.router.parseUrl("/login")));
  };

  canLoad(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated()
      .pipe(map(isAuth => isAuth ? isAuth : this.router.parseUrl("/login")));
  };
};
