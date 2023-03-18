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

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) {
    this.htmlElement = this._elementRef;
  }

  ngOnInit(): void{
    console.log("ngOnInit directive error-msg");
    this.setColor();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = TypeErrorColor[this.type];
  }
}
