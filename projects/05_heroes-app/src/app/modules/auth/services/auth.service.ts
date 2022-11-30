import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from "rxjs";
import { environment } from '../../../../environments/environment';

import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _endPoint: string = environment.endPoint;
  private _user: User = {} as User;

  constructor(private http: HttpClient) {
  };

  get userActive(){
    return { ...this._user }
  };

  isAuthenticated(): Observable<boolean>{
    if(!localStorage.getItem("token")) return of(false);
    return this.login().pipe(map(() => true));
  };

  login(){
    return this.http.get<User>(`${this._endPoint}/usuarios/1`)
      .pipe(tap(user => this._user = user))
      .pipe(tap(({ id }) => localStorage.setItem("token", id.toString())))
  };

  logout(){
    localStorage.removeItem("token");
    this._user = {} as User;
  };

};
