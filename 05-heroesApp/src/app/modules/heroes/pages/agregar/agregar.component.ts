import { Component, OnInit } from '@angular/core';
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

  constructor(private heroesService: HeroesService) { };

  ngOnInit(): void { };

  guardarHeroe(){
    if(!this.heroe.superhero.trim().length) return;
    if(!this.heroe.alter_ego.trim().length) return;
    if(!this.heroe.first_appearance.trim().length) return;
    if(!this.heroe.characters.trim().length) return;
    if(!this.heroe.publisher.trim().length) return;

    if(!this.heroe.alt_img) this.heroe.alt_img = "assets/no-image.png";

    this.heroesService.agregarHeroe(this.heroe)
      .subscribe((heroe)=>{ this.heroe = heroe });

  }
};
