import { Component } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  template: `
    <p>
      dona-http works!
    </p>
  `,
  styles: [
  ]
})
export class DonaHttpComponent {

  constructor(
    private graficasService: GraficasService
  ){}

  ngOnInit(){
    this.graficasService.getUsersRRSS().subscribe(data => {
      console.log(data);
    })
  }
}
