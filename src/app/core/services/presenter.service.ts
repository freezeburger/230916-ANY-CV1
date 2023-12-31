import { Injectable, inject } from '@angular/core';
import { FacadeAction, FacadeService } from '../interfaces/patterns/facade-service';
import { State } from '../interfaces/presenter/state';
import { ActionEnum } from '../interfaces/presenter/action.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { PRESENTER_MIDDLEWARE } from './presenter.token';

@Injectable({
  providedIn: 'root'
})
export class PresenterService implements FacadeService<State, ActionEnum> {

  private _state$ = new BehaviorSubject<State>({
    products: [],
    messages: [],
    notification:null,
    authenticated: false,
    online: true
  });

  public action$ = new BehaviorSubject<FacadeAction<ActionEnum> | null>(null);
  public state$ = this._state$.asObservable();

  async dispatch(action: FacadeAction<ActionEnum>) {
    this.action$.next(action);

    const update = this.createUpdateFromAction(action);
    this.updateState(update)

  }

  private createUpdateFromAction(action: FacadeAction<ActionEnum>): Partial<State>{
    const update: Partial<State> = {}
    switch (action.type) {

      case ActionEnum.APP_NOTIFICATION:
        update.notification =  action.payload;
        break;

      case ActionEnum.PRODUCT_LIST_UPDATE:
        update.products =  action.payload;
        break;

      case ActionEnum.APP_ONLINE:
        update.online = true;
        break;

      case ActionEnum.APP_OFFLINE:
        update.online = false;
        break;
      default:
        break;
    }
    return update;
  }


  private updateState(update: Partial<State>) {
    this._state$.next({ ...this._state$.value, ...update })
  }

}
