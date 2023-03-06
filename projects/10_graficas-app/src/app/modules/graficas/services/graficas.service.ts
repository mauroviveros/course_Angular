import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';


interface ChartData{
  labels: string[],
  data: number[]
}
@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private _http: HttpClient
  ){}

  getUsersRRSS(): Observable<any>{
    return this._http.get("http://localhost:3000/grafica");
  }

  getChartUsersRRSS(): Observable<ChartData>{
    return this.getUsersRRSS()
      .pipe(
        map(data => { return { labels: Object.keys(data), data: Object.values(data) } })
      )
  }
}
