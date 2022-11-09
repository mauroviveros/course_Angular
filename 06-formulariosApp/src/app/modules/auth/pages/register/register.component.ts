import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern(this.validatorService.FULLNAME_PATTERN)]],
    email: [null, [Validators.required, Validators.pattern(this.validatorService.EMAIL_PATTERN)]],
    username: [null, [Validators.required, this.validatorService.noPuedeSerAdmin]],
    password: null,
    password_confirm: null
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
  ) { };

  ngOnInit(): void {
  };




  public hasErrors(field: string, validator: string): boolean {
    if(!this.form.controls[field].touched) return false;
    return this.form.controls[field].errors?.[validator];
  };

  public guardar(): void {
    this.form.markAllAsTouched();
    if(this.form.invalid) return;

    console.log(this.form.value);
  };
};
