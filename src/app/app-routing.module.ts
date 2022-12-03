import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [
  {
    path: 'addequipe',
    component: EquipeComponent
},
{
  path: 'equipes',
  component: ListEquipeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
