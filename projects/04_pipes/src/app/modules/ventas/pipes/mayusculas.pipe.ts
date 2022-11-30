import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: String, enMayusculas: Boolean = true): string{
    return enMayusculas ? value.toUpperCase() : value.toLowerCase();
  };

};
