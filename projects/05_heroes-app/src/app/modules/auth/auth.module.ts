import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing';

import { LoginComponent } from './pages/login/login.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // FlexLayoutModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
