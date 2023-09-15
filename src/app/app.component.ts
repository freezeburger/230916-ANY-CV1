import { Component } from '@angular/core';
import { PresenterDirective } from './core/directives/presenter.directive';
import { ActionEnum } from './core/interfaces/presenter/action.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PresenterDirective {

  clear(){
    this.presenter.dispatch({type:ActionEnum.APP_NOTIFICATION, payload:null})
  }
}
