import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Importa HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditPersonaComponent } from './components/add-edit-persona/add-edit-persona.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { AddEditCiudadComponent } from './components/add-edit-ciudad/add-edit-ciudad.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AddEditUsuarioComponent } from './components/add-edit-usuario/add-edit-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonasComponent,
    NavbarComponent,
    AddEditPersonaComponent,
    LoginComponent,
    CiudadComponent,
    AddEditCiudadComponent,
    UsuariosComponent,
    AddEditUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideHttpClient(withFetch()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
