import { Injectable } from '@angular/core';
import { FacadeAction, FacadeService } from '../interfaces/patterns/facade-service';
import { State } from '../interfaces/presenter/state';
import { ActionEnum } from '../interfaces/presenter/action.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenterService implements FacadeService<State, ActionEnum> {

  private _state$ = new BehaviorSubject<State>({
    products: [],
    messages: [],
    authenticated:false,
    online:true
  });

  public action$ = new BehaviorSubject<FacadeAction<ActionEnum> | null>(null);
  public state$ = this._state$.asObservable();

  async dispatch(action: FacadeAction<ActionEnum>) {
    this.action$.next(action);

    if (action.type === ActionEnum.PRODUCT_LIST_UPDATE)
      this.updateState({products:action.payload})

  }


  private updateState(update:Partial<State>){
    this._state$.next({ ...this._state$.value, ...update })
  }

}
