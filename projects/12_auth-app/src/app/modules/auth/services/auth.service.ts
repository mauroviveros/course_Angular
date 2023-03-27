import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
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
      tap(resp => {
        if(!resp.ok) return;
        localStorage.setItem("token", resp.token);
        this._user = resp.user;
      } ),
      map(resp => resp.ok),
      catchError(err => {
        let message: string = "Ah ocurrido un error";
        if(err.error.error) message = err.error.error.message;
        return of(message);
      })
    )
  };

  validarToken(): Observable<boolean>{
    const headers = new HttpHeaders()
      .set("x-token", localStorage.getItem("token") || "");

    return this._http.get<AuthResponse>(`${this._url}/user`, { headers }).pipe(
      tap(resp => {
        if(!resp.ok) return;
        localStorage.setItem("token", resp.token);
        this._user = resp.user;
      }),
      map(resp => resp.ok),
      catchError(err => of(false))
    )
  };
}