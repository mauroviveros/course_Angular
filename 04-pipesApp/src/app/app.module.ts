import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared/shared.module';
import { VentasModule } from './modules/ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el "Locale" de la APP
import localeES_AR from "@angular/common/locales/es-AR";
import localeFR from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeES_AR);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
