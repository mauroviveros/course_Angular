import { Directive } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective {

  constructor() {
    console.log("constructor directive error-msg");
  }

  ngOnInit(): void{
    console.log("ngOnInit directive error-msg");
  }
}
