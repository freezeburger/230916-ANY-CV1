import { Component } from '@angular/core';
import { PresenterDirective } from 'src/app/core/directives/presenter.directive';
import { ActionEnum } from 'src/app/core/interfaces/presenter/action.enum';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent extends PresenterDirective{


  requestAuthRegister(){
    this.presenter.dispatch({payload:'',type:ActionEnum.AUTH_REGISTER_REQUEST})
  }
}
