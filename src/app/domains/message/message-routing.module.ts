import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMessageComponent } from './views/view-message/view-message.component';

const routes: Routes = [
  {
    path:'',
    component:ViewMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
