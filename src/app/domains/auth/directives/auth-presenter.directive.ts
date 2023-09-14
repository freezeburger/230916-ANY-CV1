import { Directive } from '@angular/core';
import { PresenterDirective } from 'src/app/core/directives/presenter.directive';
import { ActionEnum } from 'src/app/core/interfaces/presenter/action.enum';
import { MAuthCredentials } from 'src/app/core/models/auth-credentials.model';

@Directive({
  selector: '[appAuthPresenter]'
})
export class AuthPresenterDirective extends PresenterDirective {

  credentials:MAuthCredentials = {
    email:'',
    password :''
  }

  feedbackMessage = ''

  requestAuthLogin(){
    this.request( this.credentials , ActionEnum.AUTH_LOGIN_REQUEST)
  }
  requestAuthRegister(){
    this.request( this.credentials , ActionEnum.AUTH_REGISTER_REQUEST)
  }

  private request(payload:MAuthCredentials,type:ActionEnum):void{

    if(!this.credentials.email || !this.credentials.password){
      this.feedbackMessage = 'Invalid Credentials';
      return;
    }
    this.presenter.dispatch({payload, type})
  }
}
