import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private APIkey    : string    = "W3JuH3NuEU1R4li1nfIMT1EclPpUm3E6";
  private gifUrlsvc : string    = "https://api.giphy.com/v1/gifs";
  private _historial: string[]  = [];
  public resultados : Gif[]     = [];

  constructor(
    private http: HttpClient
  ){
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    if(this._historial[0]) this.buscarGifs(this._historial[0]);
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


    const params = new HttpParams({
      fromObject: {
        api_key : this.APIkey,
        limit   : "10",
        q       : query
      }
    });

    this.http.get<SearchGifsResponse>(`${ this.gifUrlsvc }/search`, { params }).subscribe((resp) =>{
      this.resultados = resp.data;
    });


  }
}
