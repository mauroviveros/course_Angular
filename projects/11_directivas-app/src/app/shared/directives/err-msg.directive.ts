import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective {
  private _default = {
    color: "red",
    text: "Campo invalido"
  }
  @Input() public set color(valor: string){
    this._elementRef.nativeElement.style.color = valor || this._default.color;
  }
  @Input("error-msg") public set message(valor: string){
    this._elementRef.nativeElement.innerHTML = valor || this._default.text;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) {
    this._elementRef.nativeElement.classList.add("form-text");
  }
  ngOnInit(): void{
    this._elementRef.nativeElement.style.color = this._default.color;
    this._elementRef.nativeElement.innerHTML = this._default.text;

  }
}
