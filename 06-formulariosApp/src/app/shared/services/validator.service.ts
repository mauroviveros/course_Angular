import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public FULLNAME_PATTERN : string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public EMAIL_PATTERN    : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { };

  public noPuedeSerAdmin(control: FormControl) : ValidationErrors | null {
    const value : string = control.value?.trim().toLowerCase();

    if(value === "admin") return { noAdmin: true };
    return null;
  };
};
