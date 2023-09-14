import { Component } from '@angular/core';
import { AuthPresenterDirective } from '../directives/auth-presenter.directive';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent extends AuthPresenterDirective {


}
