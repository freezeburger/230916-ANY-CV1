import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  // Transitive Export
  exports: [
    ProductModule,
    AuthModule,
    MessageModule
  ]
})
export class DomainsModule { }
