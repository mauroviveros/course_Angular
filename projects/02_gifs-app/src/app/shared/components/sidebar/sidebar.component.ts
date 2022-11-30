import { Component } from '@angular/core';
import { GifsService } from '../../../modules/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private gifsService: GifsService
  ){};

  get historial(): string[]{
    return this.gifsService.historial
  };

  buscar(termino: string): void{
    this.gifsService.buscarGifs(termino);
  };

}
