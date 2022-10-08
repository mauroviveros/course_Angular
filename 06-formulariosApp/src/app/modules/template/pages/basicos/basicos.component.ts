import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  @ViewChild('miFormulario') form: NgForm = {} as NgForm;

  public guardarForm(){
    console.log(this.form);
  };

  public nombreValido(): boolean{
    if(!this.form.controls || !this.form.controls['producto']) return false;
    return this.form.controls['producto'].invalid && this.form.controls['producto'].touched;
  };
};
