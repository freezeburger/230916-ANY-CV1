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
  state$ = new BehaviorSubject<State>({
    products: [],
    messages: [],
    authenticated:false
  });

  action$ = new BehaviorSubject<FacadeAction<ActionEnum> | null>(null);


  async dispatch(action: FacadeAction<ActionEnum>) {
    console.table(action);

    // NOT GOOD REWORK
    if (action.type === ActionEnum.PRODUCT_LIST_REQUEST) {
      const products = await fetch('https://dummyjson.com/products').then(res => res.json()).then( data => data.products);
      this.state$.next(
        { ...this.state$.value, products }
      )
    }
  }

}
