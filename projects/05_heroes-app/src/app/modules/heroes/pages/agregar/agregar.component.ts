import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher, PublisherDescription } from "../../interfaces/heroe.interface";
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
  @ViewChild("dialogRef") dialogRef: TemplateRef<any> = {} as TemplateRef<any>;

  public publishers: PublisherDescription[] = [
    { id: Publisher.DCComics, description: "DC - Comics" },
    { id: Publisher.MarvelComics, description: "Marvel - Comics" }
  ];

  public heroe: Heroe = {} as Heroe;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
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
    const dialogRef = this.dialog.open(ConfirmarComponent, { data: this.heroe });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.heroesService.eliminarHeroe(heroeID).subscribe(() => {
        this.snackBar.open("Heroe Borrado!", undefined, { duration: 1500 });
        this.router.navigate([`/heroes`]);
      });
    });

    dialogRef.afterClosed()
      .pipe(switchMap(result => result ? this.heroesService.eliminarHeroe(heroeID) : result))
      .subscribe(() => {
        this.snackBar.open("Heroe Borrado!", undefined, { duration: 1500 });
        this.router.navigate([`/heroes`]);
      });
  };

};
