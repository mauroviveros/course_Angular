import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

interface Users{
  id: number,
  email: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private http: HttpClient
  ) { };

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    let params = new HttpParams();
    if(control.value) params = params.set("q", control.value);
    return this.http.get<Users[]>(`${environment.endPoint}/usuarios`, { params })
      .pipe(delay(3000), map(resp => resp.length == 0 ? null : { emailTomado: true } ));
  };
};
