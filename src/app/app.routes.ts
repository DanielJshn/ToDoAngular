import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent, pathMatch: 'full' }, 
  { path: 'note', component: NoteComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];