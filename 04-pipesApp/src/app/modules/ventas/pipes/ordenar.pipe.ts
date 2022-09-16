import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], orderBy: keyof Heroe | null = null): Heroe[]{
    let values: number[] = [1, -1];
    if(orderBy != "nombre") values = [-1, 1];

    if(orderBy) return heroes.sort((a, b) => (a[orderBy] > b[orderBy]) ? values[0] : values[1]);
    else return heroes;
  };
};
