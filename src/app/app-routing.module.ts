import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { genericGuard } from './core/middlewares/guards/generic.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./domains/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'products',
    loadChildren:()=>import('./domains/product/product.module').then( m => m.ProductModule),
    canMatch:[genericGuard]
  },
  {
    path:'messages',
    loadChildren:()=>import('./domains/message/message.module').then( m => m.MessageModule),
    canMatch:[genericGuard]
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
