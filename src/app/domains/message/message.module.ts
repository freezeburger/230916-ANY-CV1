import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  declarations: [
    MessageListComponent
  ],
  imports: [
    SharedModule,
    MessageRoutingModule
  ],
  exports: [
    MessageListComponent
  ]
})
export class MessageModule { }
