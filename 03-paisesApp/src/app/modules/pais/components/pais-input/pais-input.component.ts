import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  public debouncer: Subject<string> = new Subject();
  public termino: string = "";

  @Output() public onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() public onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() public placeholder: string = "";

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((termino: string) =>{
      this.onDebounce.emit(termino);
    });
  };

  public buscar(){
    this.onEnter.emit(this.termino);
  };

  public teclaPrecionada(): void{
    this.debouncer.next(this.termino);
  };
}
