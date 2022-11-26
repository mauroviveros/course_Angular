import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';

import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public regiones : string[]  = [];
  public paises   : Pais[]    = [];

  public form: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    pais  : ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.form.get('region')?.valueChanges.pipe(
      tap(_ => this.form.get('pais')?.reset('') ),
      switchMap(region => this.paisesService.getPaisesPorRegion(region))
    ).subscribe(paises => this.paises = paises)
  };

  public guardar(){
    console.log(this.form.value);
  };

};
