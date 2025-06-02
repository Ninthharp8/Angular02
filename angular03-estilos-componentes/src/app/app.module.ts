import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{ HttpClientModule }from'@angular/common/http'; 

import { BusquedaService } from './servicios/busqueda.service';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NotfoundComponent } from './componente/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BusquedaComponent
    //NotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    NgbModule
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
