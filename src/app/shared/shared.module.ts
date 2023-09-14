import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    LayoutModule,
    NgImportModule
  ]
})
export class SharedModule { }
