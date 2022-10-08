import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{
  @ViewChild('miFormulario') form: NgForm = {} as NgForm;

  public guardarForm(): void{
    console.log(this.form);
    this.form.resetForm();
  };

  public nombreValido(): boolean{
    if(!this.form.controls || !this.form.controls['producto']) return false;
    return this.form.controls['producto'].invalid && this.form.controls['producto'].touched;
  };

  public precioValido(): boolean{
    if(!this.form.controls || !this.form.controls['precio']) return false;
    return this.form.controls['precio'].invalid && this.form.controls['precio'].touched;
  };

  public existenciasValido(): boolean{
    if(!this.form.controls || !this.form.controls['existencias']) return false;
    return this.form.controls['existencias'].invalid && this.form.controls['existencias'].touched;
  };
};
