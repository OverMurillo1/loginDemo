import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component' ;
import { FormComponent } from './forms/register/form.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'login', 
        component: LoginComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
