import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public termino: string = "";
  public heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { };

  ngOnInit(): void { };

  buscando() {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  };

};
