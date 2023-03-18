import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective {
  @Input() public set color(valor: string){
    this._elementRef.nativeElement.style.color = valor || "red";
  }
  @Input("error-msg") public set message(valor: string){
    this._elementRef.nativeElement.innerHTML = valor;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) {
    this._elementRef.nativeElement.classList.add("form-text");
  }
}
