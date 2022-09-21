import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) { };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroe(id)))
      .subscribe((heroe) => this.heroe = heroe);
  };

  guardarHeroe() {
    if (!this.heroe.superhero.trim().length) return;
    if (!this.heroe.alter_ego.trim().length) return;
    if (!this.heroe.first_appearance.trim().length) return;
    if (!this.heroe.characters.trim().length) return;
    if (!this.heroe.publisher.trim().length) return;


    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe((heroe) => { this.heroe = heroe });
    } else {
      if (!this.heroe.alt_img) this.heroe.alt_img = "assets/no-image.png";
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe((heroe) => {
        this.heroe = heroe;
        this.router.navigate([`/heroes/${this.heroe.id}/editar`]);
        });
    };
  };

};
