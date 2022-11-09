import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

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

  public camposIguales(str1: string, str2: string): any {
    return (formGroup: AbstractControl): ValidationErrors | null =>{
      const pass1 = formGroup.get(str1)?.value;
      const pass2 = formGroup.get(str2)?.value;

      formGroup.get(str2)?.setErrors(null);
      if(pass1 === pass2) return null;

      formGroup.get(str2)?.setErrors({ noiguales: true });
      return { noiguales: true };
    };
  };
};
