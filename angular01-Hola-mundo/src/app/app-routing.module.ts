import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './componentes/principal/principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';


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
