import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher, PublisherDescription } from "../../interfaces/heroe.interface";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  public publishers: PublisherDescription[] = [
    { id: Publisher.DCComics, description: "DC - Comics" },
    { id: Publisher.MarvelComics, description: "Marvel - Comics" }
  ];

  public heroe: Heroe = {} as Heroe;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroe(id)))
      .subscribe((heroe) => this.heroe = heroe);
  };

  guardarHeroe(): void {
    if (!this.heroe.superhero.trim().length) return;
    if (!this.heroe.alter_ego.trim().length) return;
    if (!this.heroe.first_appearance.trim().length) return;
    if (!this.heroe.characters.trim().length) return;
    if (!this.heroe.publisher.trim().length) return;


    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe((heroe) => {
        this.heroe = heroe;
        this.snackBar.open("Heroe Actualizado!", undefined, { duration: 1500 });
        this.router.navigate([`/heroes/${this.heroe.id}/editar`]);
      });
    }
    else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.heroe = heroe;
        this.snackBar.open("Heroe Creado!", undefined, { duration: 1500 });
        this.router.navigate([`/heroes/${this.heroe.id}/editar`]);
      });
    };
  };

  eliminarHeroe(heroeID: string): void {
    this.heroesService.eliminarHeroe(heroeID).subscribe(() => {
      this.snackBar.open("Heroe Borrado!", undefined, { duration: 1500 });
      this.router.navigate([`/heroes/listado`]);
    });
  };

};
