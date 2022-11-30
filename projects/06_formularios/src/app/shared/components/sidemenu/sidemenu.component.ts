import { Component } from '@angular/core';

interface MenuItem{
  text  : string;
  route : string;
};

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent{
  public templateMenu: MenuItem[] = [
    { text: "Basicos", route: "./template/basicos" },
    { text: "Dinámicos", route: "./template/dinamicos" },
    { text: "Switches", route: "./template/switches" }
  ];

  public reactiveMenu: MenuItem[] = [
    { text: "Basicos", route: "./reactive/basicos" },
    { text: "Dinámicos", route: "./reactive/dinamicos" },
    { text: "Switches", route: "./reactive/switches" }
  ];

  public authMenu: MenuItem[] = [
    { text: "Login", route: "./login" },
    { text: "Register", route: "./register" },
  ];
};
