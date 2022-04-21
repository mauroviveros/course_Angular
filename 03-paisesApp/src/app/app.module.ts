import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './modules/pais/pais.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
