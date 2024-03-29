import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
  // pure: false
})
export class ImagenPipe implements PipeTransform {

  constructor(private http: HttpClient) { };

  private _getImageById(imageUrl: string) {
    return new Promise(resolve => {
      this.http.get(imageUrl, { responseType: 'blob' }).subscribe({
        complete: () => { resolve(true) },
        error: () => { resolve(false) }
      });
    })
  };

  public async transform(heroe: Heroe): Promise<string> {
    const emptyImgUrl = `assets/no-image.png`;
    const imageUrl = `/assets/heroes/${heroe.id}.jpg`;

    return new Promise(async resolve => {
      if (heroe.alt_img) return resolve(heroe.alt_img)
      if (!heroe.id) return resolve(emptyImgUrl);
      if (await this._getImageById(imageUrl)) return resolve(imageUrl);
      return resolve(emptyImgUrl);
    });
  }

}
