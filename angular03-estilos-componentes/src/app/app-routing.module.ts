import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'busqueda', component: BusquedaComponent,
    data: {
      title: ' Componente de Busqueda'
    }
  },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
