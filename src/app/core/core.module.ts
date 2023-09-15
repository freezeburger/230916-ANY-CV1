import { NgModule, inject } from '@angular/core';
import { PresenterDirective } from './directives/presenter.directive';
import { LoggerMiddlewareService } from './middlewares/presenter/logger.middleware.service';
import { ProductMiddlewareService } from './middlewares/presenter/product.middleware.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterMiddlewareService } from './middlewares/presenter/router.middleware.service';
import { GenericInterceptorService } from './middlewares/interceptors/generic-interceptor.service';
import { PRESENTER_MIDDLEWARE } from './services/presenter.token';

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
  providers:[
    { provide:HTTP_INTERCEPTORS, useClass:GenericInterceptorService, multi:true},
    //{ provide:PRESENTER_MIDDLEWARE, useClass:LoggerMiddlewareService, multi:true},
    { provide:PRESENTER_MIDDLEWARE, useClass:ProductMiddlewareService, multi:true},
    { provide:PRESENTER_MIDDLEWARE, useClass:RouterMiddlewareService, multi:true}
  ]
})
export class CoreModule {

  private middlewares = inject(PRESENTER_MIDDLEWARE);

  /*
  constructor(
     loggerMiddelware: LoggerMiddlewareService,
    productMiddleware: ProductMiddlewareService,
    routerMiddleware:RouterMiddlewareService
  ){}
  */

 }
