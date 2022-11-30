import { Component, OnInit } from '@angular/core';

interface RouteLink {
  path: string,
  title: string
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class SidebarComponent{

  public routes: RouteLink[] = [
    { path: "", title: "Buscar Pais" },
    { path: "region", title: "Por Region" },
    { path: "capital", title: "Por Capital" },
  ];
}
