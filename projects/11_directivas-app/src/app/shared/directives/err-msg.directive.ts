import { Directive, ElementRef, Input, Type } from '@angular/core';

type TypeError = "error" | "info" | "warning";

enum TypeErrorColor {
  error = "red",
  info = "blue",
  warning = "yellow"
};
@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective {
  public htmlElement: ElementRef<HTMLElement> = {} as ElementRef<HTMLElement>;
  @Input() public type: TypeError = "error";
  @Input("error-msg") public message: string = "";

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) {
    this.htmlElement = this._elementRef;
  }

  ngOnInit(): void{
    console.log("ngOnInit directive error-msg");
    this.setColor();
    this.setMensaje();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = TypeErrorColor[this.type];
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerHTML = this.message;
  }
}
