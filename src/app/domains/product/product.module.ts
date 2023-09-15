import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    CoreModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
