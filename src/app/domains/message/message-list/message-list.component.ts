import { Component } from '@angular/core';
import { PresenterDirective } from 'src/app/core/directives/presenter.directive';
import { ActionEnum } from 'src/app/core/interfaces/presenter/action.enum';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent extends PresenterDirective {

  requestMessages(){
    this.presenter.dispatch({payload:'',type:ActionEnum.MESSAGE_LIST_REQUEST})
  }

}
