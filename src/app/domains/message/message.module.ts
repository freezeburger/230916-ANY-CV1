import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageRoutingModule } from './message-routing.module';
import { ViewMessageComponent } from './views/view-message/view-message.component';

@NgModule({
  declarations: [
    MessageListComponent,
    ViewMessageComponent
  ],
  imports: [
    SharedModule,
    MessageRoutingModule
  ],
  exports: [
    MessageListComponent,
    ViewMessageComponent
  ]
})
export class MessageModule { }
