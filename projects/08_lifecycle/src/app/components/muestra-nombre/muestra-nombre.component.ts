import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.scss']
})
export class MuestraNombreComponent {
  @Input() public nombre: string = "";

  constructor(){};

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  };

}
