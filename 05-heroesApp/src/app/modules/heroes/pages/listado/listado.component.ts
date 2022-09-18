import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService){};

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => console.log(heroes));
  };

}
