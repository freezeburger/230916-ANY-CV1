import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterDirective } from './directives/presenter.directive';



@NgModule({
  declarations: [
    PresenterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresenterDirective
  ]
})
export class CoreModule { }
