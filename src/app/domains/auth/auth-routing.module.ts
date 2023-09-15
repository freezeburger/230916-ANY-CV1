import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewRegisterComponent } from './views/view-register/view-register.component';

const routes: Routes = [
  {
    path:'login',
    component:ViewLoginComponent
  },
  {
    path:'register',
    component:ViewRegisterComponent
  },
  {
    path:'**',
    redirectTo:'register',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
