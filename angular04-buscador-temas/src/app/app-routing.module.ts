import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './commponentes/principal/principal.component';
import { BusquedaComponent } from './commponentes/busqueda/busqueda.component';
import { NotfoundComponent } from './commponentes/notfound/notfound.component';


const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'search',component: BusquedaComponent,data:{title:'componente de busqueda'}},
  {path:'**',component:NotfoundComponent}//error not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
