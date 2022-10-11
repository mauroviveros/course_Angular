import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    genero          : [ null, Validators.required ],
    notificaciones  : [ null, Validators.required ],
    terminos        : [ null, Validators.requiredTrue ]
  });

  public persona = {
    notificaciones: false,
  };

  constructor(
    private formBuilder: FormBuilder
  ) { };

  ngOnInit(): void {
    this.form.reset(this.persona);
  };

};
