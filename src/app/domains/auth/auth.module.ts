import { NgModule } from '@angular/core';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthPresenterDirective } from './directives/auth-presenter.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewRegisterComponent } from './views/view-register/view-register.component';

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
  ]
})
export class AuthModule { }
