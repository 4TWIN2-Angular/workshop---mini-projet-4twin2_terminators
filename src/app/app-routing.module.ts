import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'addequipe',
    component: EquipeComponent
},
{
  path: 'equipes',
  component: ListEquipeComponent
},

{
  path: 'login',
  component: LoginComponent
},
{
    path: "etudiants",
    loadChildren: () =>
      import("./etudiant/etudiant.module").then(
        (m) => m.EtudiantModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
