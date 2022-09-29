import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template.routing';
import { SwitchesComponent } from './pages/switches/switches.component';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { BasicosComponent } from './pages/basicos/basicos.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { };
