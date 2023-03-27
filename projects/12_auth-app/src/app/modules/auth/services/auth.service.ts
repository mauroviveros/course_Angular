import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../../../../environments/environment";
import { AuthResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = environment["BASE_URL"];

  constructor(
    private _http: HttpClient
  ) { }

  login(email: string, password: string){
    return this._http.post<AuthResponse>(`${this._url}/login`, { email, password });
  }
}
