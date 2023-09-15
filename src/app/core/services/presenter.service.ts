import { Injectable } from '@angular/core';
import { FacadeAction, FacadeService } from '../interfaces/patterns/facade-service';
import { State } from '../interfaces/presenter/state';
import { ActionEnum } from '../interfaces/presenter/action.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenterService implements FacadeService<State, ActionEnum> {

  // TODO Observable Theory
  private _state$ = new BehaviorSubject<State>({
    products: [],
    messages: [],
    authenticated:false
  });

  public action$ = new BehaviorSubject<FacadeAction<ActionEnum> | null>(null);
  public state$ = this._state$.asObservable();

  async dispatch(action: FacadeAction<ActionEnum>) {
    //console.table(action);
    this.action$.next(action);

    // NOT GOOD REWORK
    if (action.type === ActionEnum.PRODUCT_LIST_UPDATE)
      this._state$.next({ ...this._state$.value, products:action.payload })

  }

}
