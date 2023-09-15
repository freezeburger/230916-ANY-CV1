import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterDirective } from './directives/presenter.directive';
import { LoggerMiddlewareService } from './middlewares/presenter/logger.middleware.service';



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
export class CoreModule {
  constructor(
    loggerMiddelware: LoggerMiddlewareService
  ){}
 }
