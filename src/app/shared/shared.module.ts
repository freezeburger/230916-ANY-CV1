import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NgImportModule } from './ng-import.module';
import { CdcModule } from '@cdc';

@NgModule({
  exports: [
    LayoutModule,
    NgImportModule,
    CdcModule
  ]
})
export class SharedModule { }
