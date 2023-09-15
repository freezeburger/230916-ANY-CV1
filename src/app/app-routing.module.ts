import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./domains/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'products',
    loadChildren:()=>import('./domains/product/product.module').then( m => m.ProductModule)
  },
  {
    path:'messages',
    loadChildren:()=>import('./domains/message/message.module').then( m => m.MessageModule)
  },
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
