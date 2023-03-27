import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

  private _tapResponse(resp: AuthResponse){
    if(!resp.ok) return;
    localStorage.setItem("token", resp.token);
    this._user = resp.user;
  };
  
  private _catchError(err: HttpErrorResponse){
    let message: string = "Ah ocurrido un error";
    if(err.error.error) message = err.error.error.message;
    console.log(err.error.error.code)
    if(err.error.error.code === 11000) message = `Ya se encuentra registrado el email: ${err.error.error.keyValue.email}`;
    return of(message);
  };

  public register(name: string, email: string, password: string){
    return this._http.post<AuthResponse>(`${this._url}/register`, { name, email, password }).pipe(
      tap(resp => this._tapResponse(resp)),
      map(resp => resp.ok),
      catchError(this._catchError)
    );
  };

  public login(email: string, password: string){
    return this._http.post<AuthResponse>(`${this._url}/login`, { email, password }).pipe(
      tap(resp => this._tapResponse(resp)),
      map(resp => resp.ok),
      catchError(this._catchError)
    );
  };

  public logout(){
    localStorage.removeItem("token");
  }

  public validarToken(): Observable<boolean>{
    const headers = new HttpHeaders()
      .set("x-token", localStorage.getItem("token") || "");

    return this._http.get<AuthResponse>(`${this._url}/user`, { headers }).pipe(
      tap(resp => this._tapResponse(resp)),
      map(resp => resp.ok),
      catchError(err => of(false))
    );
  };

};