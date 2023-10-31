import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeAgentesComponent } from './vista/lista-de-agentes/lista-de-agentes.component';
import { EditorDeAgentesComponent } from './vista/editor-de-agentes/editor-de-agentes.component';

const routes: Routes = [
  {path:"",component:ListaDeAgentesComponent},
  {path:"edicion/:id",component:EditorDeAgentesComponent},
  {path:"nuevo",component:EditorDeAgentesComponent},
  {path:"**",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
