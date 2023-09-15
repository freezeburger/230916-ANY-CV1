import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ViewProductComponent } from './views/view-product/view-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ViewProductComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    CoreModule
  ],
  exports: [
    ProductListComponent,
    ViewProductComponent
  ]
})
export class ProductModule { }
