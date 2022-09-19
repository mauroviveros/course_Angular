import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string{
    if(heroe.alt_img) return heroe.alt_img;
    if(heroe.id) return `assets/heroes/${heroe.id}.jpg`;
    return `assets/no-image.png`;
  }

}
