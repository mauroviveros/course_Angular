import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ){ }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPais(id)),
      ).subscribe({
        next: (resp) => this.pais = resp[0]
      }
    );
  }

}
