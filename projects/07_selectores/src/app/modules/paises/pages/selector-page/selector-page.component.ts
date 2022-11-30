import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';

import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public regiones   : string[]  = [];
  public paises     : Pais[]    = [];
  public fronteras  : Pais[]    = [];

  public loadingRegiones  : boolean = false;
  public loadingPaises      : boolean = false;

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
      tap(_ => {
        this.form.get('pais')?.reset('');
        this.paises = [];
        this.loadingRegiones = true;
      }),
      switchMap((region: string) => this.paisesService.getPaisesPorRegion(region))
    ).subscribe((paises: Pais[]) => {
      this.paises = paises;
      this.loadingRegiones = false;
    });

    this.form.get('pais')?.valueChanges.pipe(
      tap(_ => {
        this.form.get('frontera')?.reset('');
        this.fronteras = [];
        this.loadingPaises = true;
      }),
      switchMap((pais: string) => this.paisesService.getPaisesPorCodigo(pais))
    ).subscribe((fronteras: Pais[]) => {
      this.fronteras = fronteras;
      this.loadingPaises = false;
    });

  };

  public guardar(){
    console.log(this.form.value);
  };

};
