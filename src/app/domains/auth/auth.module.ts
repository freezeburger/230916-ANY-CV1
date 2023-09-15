import { NgModule } from '@angular/core';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthPresenterDirective } from './directives/auth-presenter.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewRegisterComponent } from './views/view-register/view-register.component';
import { PRESENTER_MIDDLEWARE } from 'src/app/core/services/presenter.token';
import { LoggerMiddlewareService } from 'src/app/core/middlewares/presenter/logger.middleware.service';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthPresenterDirective,
    ViewLoginComponent,
    ViewRegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    ViewLoginComponent,
    ViewRegisterComponent
  ],
  providers:[
    { provide:PRESENTER_MIDDLEWARE, useClass:LoggerMiddlewareService, multi:true},
  ]
})
export class AuthModule { }
