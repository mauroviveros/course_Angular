import { Component, OnInit } from '@angular/core';
import { MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  public heroe: Heroe = {} as Heroe;

  constructor(private heroesService: HeroesService) { };

  ngOnInit(): void { };

  siNoTieneResultados(){
    return this.termino.trim().length > 0 && this.heroes.length == 0
  };

  buscando() {
    this.heroesService.getHeroes(this.termino)
      .subscribe(heroes => this.heroes = heroes);
  };

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    this.heroe = this.heroes.filter((heroe) =>{
      return heroe.superhero == event.option.value;
    })[0];

    if(!this.heroe.id) return;
    this.heroesService.getHeroe(this.heroe.id)
      .subscribe(heroe => this.heroe = heroe);
  };

};
