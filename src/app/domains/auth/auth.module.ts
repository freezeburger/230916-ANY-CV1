import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthPresenterDirective } from './directives/auth-presenter.directive';



@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthPresenterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthLoginComponent,
    AuthRegisterComponent
  ]
})
export class AuthModule { }
