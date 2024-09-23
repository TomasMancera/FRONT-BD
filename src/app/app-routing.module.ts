import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { AddEditPersonaComponent } from './components/add-edit-persona/add-edit-persona.component';
import { AddEditCiudadComponent } from './components/add-edit-ciudad/add-edit-ciudad.component';
import { LoginComponent } from './pages/login/login.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AddEditUsuarioComponent } from './components/add-edit-usuario/add-edit-usuario.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'personas',component:PersonasComponent},
  {path: 'login',component:LoginComponent},
  {path: 'ciudad',component:CiudadComponent},
  {path: 'usuarios',component:UsuariosComponent},
  {path: 'usuarios/:id',component:AddEditUsuarioComponent},
  { path: 'persona/:id', component: AddEditPersonaComponent},
  { path: 'ciudad/:id', component: AddEditCiudadComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
