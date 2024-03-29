import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ){}

  buscar(): void{
    const valor = this.txtBuscar.nativeElement.value.trim();

    this.txtBuscar.nativeElement.value = "";

    this.gifsService.buscarGifs(valor);
  };
}
