import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { AuthResponse, User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = environment["BASE_URL"];
  private _user: User = {} as User;

  public get user(){
    return { ...this._user };
  }

  constructor(
    private _http: HttpClient
  ) { }

  login(email: string, password: string){
    return this._http.post<AuthResponse>(`${this._url}/login`, { email, password }).pipe(
      tap(resp => this._user = resp.user ),
      map(resp => resp.ok),
      catchError(err => {
        let message: string = "Ah ocurrido un error";
        if(err.error.error) message = err.error.error.message;
        return of(message);
      })
    )
  }
}
