import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  @Input() public set customIf(condicion: boolean | string){
    if(!condicion) this._viewContainer.clear();
    else this._viewContainer.createEmbeddedView(this._templateRef);
  }

  constructor(
    private _templateRef: TemplateRef<HTMLElement>,
    private _viewContainer: ViewContainerRef
  ) {
    
  }

}
