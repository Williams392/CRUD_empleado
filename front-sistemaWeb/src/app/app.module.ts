import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoferListaComponent } from './admin/chofer-lista/chofer-lista.component';
import { BusListaComponent } from './admin/bus-lista/bus-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BusEditarComponent } from './admin/bus-editar/bus-editar.component';
import { ChoferEditarComponent } from './admin/chofer-editar/chofer-editar.component';
import { DestinoListaComponent } from './admin/destino-lista/destino-lista.component';
import { DestinoEditarComponent } from './admin/destino-editar/destino-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoferListaComponent,
    BusListaComponent,
    BusEditarComponent,
    ChoferEditarComponent,
    DestinoListaComponent,
    DestinoEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

