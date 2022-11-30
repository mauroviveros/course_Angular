import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component {
  public nombre: string = "Mauro";
  public segundos: number = 1;

  private _interval: Subscription = {} as Subscription;

  ngOnInit(): void {
    console.log("ngOnInit");
    this._interval = interval(1000).subscribe(i => {
      console.log("interval");
      this.segundos++;
    });
  };

  ngOnDestroy(): void {
    this._interval.unsubscribe();
  };
  // constructor(){ console.log("constructor"); };
  // ngOnChanges(): void { console.log("ngOnChanges") };
  // ngDoCheck(): void { console.log("ngDoCheck"); };
  // ngAfterContentInit(): void { console.log("ngAfterContentInit"); };
  // ngAfterContentChecked(): void { console.log("ngAfterContentChecked"); };
  // ngAfterViewInit(): void { console.log("ngAfterViewInit"); };
  // ngAfterViewChecked(): void { console.log("ngAfterViewChecked"); };
  // ngOnDestroy(): void { console.log("ngOnDestroy"); };

  public guardar(){};
};
