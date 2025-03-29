import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, signal } from '@angular/core';
import type { Giphy, GiphyResponse } from '../interfaces/giphy';
import { map, of, tap } from 'rxjs';
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

  readonly _history = signal<Record<string, Giphy[]>>({});
  readonly history = {
    keys: computed(() => {
      const keys = Object.keys(this._history());
      const history = localStorage.getItem('history');
      return keys.length ? keys : JSON.parse(history ?? '{}');
    }),
    values: this._history
  }

  getGifs(query: string){
    query = query.trim().toLowerCase();
    if (!query) return of([]);
    if (this._history()[query]) return of(this._history()[query]);
    return this.http.get<GiphyResponse>(`${this.url}/gifs/search`, {
      params: Object.assign({}, this.params, { q: query })
    }).pipe(
       map((response) => response.data),
       tap(gifs => this._history.update(history => ({ ...history, [query]: gifs }))),
       tap(() => localStorage.setItem('history', JSON.stringify(this.history.keys()))),
    );
  }

  getTreindingGifs() {
    return this.http.get<GiphyResponse>(`${this.url}/gifs/trending`, {
      params: this.params
    }).pipe(map((response) => response.data));
  }
}
