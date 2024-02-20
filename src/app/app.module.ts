import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroSolicitudComponent } from './registro-solicitud/registro-solicitud.component';
import { TablaAmortizacionComponent } from './tabla-amortizacion/tabla-amortizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroSolicitudComponent,
    TablaAmortizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
