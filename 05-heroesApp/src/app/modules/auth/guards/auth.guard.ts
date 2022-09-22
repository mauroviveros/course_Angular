import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private authService: AuthService) { };

  canActivate(): boolean | UrlTree {
    const isActive: boolean = !!this.authService.userActive.id;
    if (isActive) return true;
    else return this.router.parseUrl("/");
  };

  canLoad(): boolean | UrlTree {
    const isActive: boolean = !!this.authService.userActive.id;
    if (isActive) return true;
    else return this.router.parseUrl("/");
  };
};
