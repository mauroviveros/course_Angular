import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){}

  canActivate(): Observable<boolean> | boolean {
    return this._authService.validarToken().pipe(
      tap(valid => { if(!valid) this._router.navigateByUrl("/auth"); })
    )
  }
  canLoad(): Observable<boolean> | boolean {
    return this._authService.validarToken().pipe(
      tap(valid => { if(!valid) this._router.navigateByUrl("/auth"); })
    )
  }
}
