import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private APIkey: string = "W3JuH3NuEU1R4li1nfIMT1EclPpUm3E6";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(
    private http: HttpClient
  ){
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
  };

  get historial(): string[]{
    return [...this._historial];
  };

  buscarGifs(query: string): void{
    query = query.trim().toLowerCase();

    if(query == "") return;

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
    };

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.APIkey }&q=${ query }&limit=5`).subscribe((resp) =>{
      this.resultados = resp.data;
    });
  }
}
