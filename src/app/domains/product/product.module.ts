import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
