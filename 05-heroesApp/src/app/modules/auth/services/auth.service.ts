import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs";
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _endPoint: string = environment.endPoint;
  private _user: User = {} as User;

  constructor(private http: HttpClient) { };

  get userActive(){
    return { ...this._user }
  };

  login(){
    return this.http.get<User>(`${this._endPoint}/usuarios/1`).pipe(tap(user => this._user = user));
  };

  logout(){
    this._user = {} as User;
  };

};
