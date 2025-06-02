import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule}from'@angular/common/http'; // se agrego esto
import { BusquedaService } from './servicios/busqueda.service';
import { BusquedaComponent } from './commponentes/busqueda/busqueda.component';// al final ded todo se agreg'o esto

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PrincipalComponent } from './commponentes/principal/principal.component';
import { NotfoundComponent } from './commponentes/notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PrincipalComponent,
    NotfoundComponent,
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // se agrego esto
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule

  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
