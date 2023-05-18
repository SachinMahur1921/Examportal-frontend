import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ExamportalComponent } from './pages/examportal/examportal.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full',
  },
  {
       path: '',
       component:HomeComponent,
       pathMatch:'full',

  },
  {
    path: 'examportal',
    component:ExamportalComponent,
    pathMatch:'full',
  },
 {
  path:'admin',
    component: AdminComponent,
    pathMatch:'full',
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
