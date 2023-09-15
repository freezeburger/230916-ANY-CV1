import { NgModule } from '@angular/core';
import { PresenterDirective } from './directives/presenter.directive';
import { LoggerMiddlewareService } from './middlewares/presenter/logger.middleware.service';
import { ProductMiddlewareService } from './middlewares/presenter/product.middleware.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterMiddlewareService } from './middlewares/presenter/router.middleware.service';

@NgModule({
  declarations: [
    PresenterDirective
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    PresenterDirective
  ],
  providers:[]
})
export class CoreModule {
  constructor(
    loggerMiddelware: LoggerMiddlewareService,
    productMiddleware: ProductMiddlewareService,
    routerMiddleware:RouterMiddlewareService
  ){}
 }
