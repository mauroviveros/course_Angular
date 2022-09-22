import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<User>(`${this.endPoint}/usuarios/1`);
  };

};
