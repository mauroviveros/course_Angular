import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive.routing';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { };
