import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    region: ['', Validators.required]
  });


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public guardar(){
    console.log(this.form.value);
  }

}
