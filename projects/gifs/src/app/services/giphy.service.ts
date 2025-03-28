import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Giphy, GiphyResponse } from '../interfaces/giphy';
import { map } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { GIPHY_APIKEY } from '../../environments/apikey';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly http = inject(HttpClient);
  private readonly apiKey = GIPHY_APIKEY;
  private readonly url = 'https://api.giphy.com/v1';
  private readonly params = {
    api_key: this.apiKey,
    limit: '25',
    offset: '0',
    rating: 'g',
    bundle: 'messaging_non_clips'
  };

  getGifs(query: string){
    return this.http.get<GiphyResponse>(`${this.url}/gifs/search`, {
      params: Object.assign({}, this.params, { q: query })
    }).pipe(map((response) => response.data));
  }

  getTreindingGifs() {
    return this.http.get<GiphyResponse>(`${this.url}/gifs/trending`, {
      params: this.params
    }).pipe(map((response) => response.data));
  }
}
