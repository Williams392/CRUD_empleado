import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoferListaComponent } from './admin/chofer-lista/chofer-lista.component';
import { BusListaComponent } from './admin/bus-lista/bus-lista.component';
import { BusEditarComponent } from './admin/bus-editar/bus-editar.component';
import { ChoferEditarComponent } from './admin/chofer-editar/chofer-editar.component';
import { DestinoListaComponent } from './admin/destino-lista/destino-lista.component';
import { DestinoEditarComponent } from './admin/destino-editar/destino-editar.component';

const routes: Routes = [
  {path:'chofer', component: ChoferListaComponent},
  {path:'', redirectTo: 'chofer', pathMatch:'full'},
  {path:'buses', component: BusListaComponent},
  {path: 'editar-chofer/:id', component: ChoferEditarComponent},
  {path: 'editar-bus/:id', component: BusEditarComponent},
  {path:'destino', component: DestinoListaComponent},
  {path:'editar-destino/:id', component: DestinoEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
