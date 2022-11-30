import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template.routing';
import { SwitchesComponent } from './pages/switches/switches.component';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { };
