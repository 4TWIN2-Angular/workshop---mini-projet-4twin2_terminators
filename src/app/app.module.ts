import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { LoginComponent } from './login/login.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    ListEquipeComponent,
    
    LoginComponent,
         

    
    

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
