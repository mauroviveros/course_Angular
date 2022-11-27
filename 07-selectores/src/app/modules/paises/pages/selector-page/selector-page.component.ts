import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';

import { Pais, PaisSearch } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public regiones   : string[]      = [];
  public paises     : PaisSearch[]  = [];
  public fronteras  : string[]      = [];

  public form: FormGroup = this.formBuilder.group({
    region  : ['', Validators.required],
    pais    : ['', Validators.required],
    frontera: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.form.get('region')?.valueChanges.pipe(
      tap(_ => this.form.get('pais')?.reset('') ),
      switchMap((region: string) => this.paisesService.getPaisesPorRegion(region))
    ).subscribe((paises: PaisSearch[]) => this.paises = paises);

    this.form.get('pais')?.valueChanges.pipe(
      tap(_ => this.form.get('frontera')?.reset('')),
      switchMap((pais: string) => this.paisesService.getFronterasPorPais(pais))
    ).subscribe((pais: Pais[]) => this.fronteras = pais[0]?.borders);

  };

  public guardar(){
    console.log(this.form.value);
  };

};