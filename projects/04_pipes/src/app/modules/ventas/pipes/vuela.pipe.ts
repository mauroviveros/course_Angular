import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
  transform(bool: boolean): string{
    return bool ? "si vuela" : "no vuela";
  };
};
