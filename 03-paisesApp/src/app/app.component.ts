import { Component } from '@angular/core';

interface RouteLink {
  path: string,
  title: string
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paisesApp';
  public routes: RouteLink[] = [
    { path: "", title: "Buscar Pais" },
    { path: "region", title: "Por Region" },
    { path: "capital", title: "Por Capital" },
  ];
}
