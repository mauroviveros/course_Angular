import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../../shared/services/email-validator.service';
import { ValidatorService } from '../../../../shared/services/validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern(this.validatorService.FULLNAME_PATTERN)]],
    email: [null, [Validators.required, Validators.pattern(this.validatorService.EMAIL_PATTERN)], [ this.emailValidator ]],
    username: [null, [Validators.required, this.validatorService.noPuedeSerAdmin]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    password_confirm: null
  }, {
    validators: [ this.validatorService.camposIguales("password", "password_confirm") ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { };

  ngOnInit(): void {};

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
