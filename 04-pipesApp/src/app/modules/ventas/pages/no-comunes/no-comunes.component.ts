import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig
  ){};

  ngOnInit(){
    this.primengConfig.ripple = true;
  };
};
