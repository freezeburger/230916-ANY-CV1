import { NgModule } from '@angular/core';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthPresenterDirective } from './directives/auth-presenter.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthPresenterDirective
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    AuthLoginComponent,
    AuthRegisterComponent
  ]
})
export class AuthModule { }
