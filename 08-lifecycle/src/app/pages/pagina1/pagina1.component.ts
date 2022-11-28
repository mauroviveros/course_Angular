import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component {
  public nombre: string = "Mauro";

  constructor(){ console.log("constructor"); };
  ngOnInit(): void { console.log("ngOnInit"); };
  ngOnChanges(): void { console.log("ngOnChanges") };
  ngDoCheck(): void { console.log("ngDoCheck"); };
  ngAfterContentInit(): void { console.log("ngAfterContentInit"); };
  ngAfterContentChecked(): void { console.log("ngAfterContentChecked"); };
  ngAfterViewInit(): void { console.log("ngAfterViewInit"); };
  ngAfterViewChecked(): void { console.log("ngAfterViewChecked"); };
  ngOnDestroy(): void { console.log("ngOnDestroy"); };

  public guardar(){};
};
