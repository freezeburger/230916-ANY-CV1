import { Injectable } from '@angular/core';
import { PresenterService } from '../../services/presenter.service';
import { ProductService } from '../../services/product.service';
import { ActionEnum } from '../../interfaces/presenter/action.enum';
import { filter, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductMiddlewareService {

  constructor(
    presenterSrv:PresenterService,
    productSrv:ProductService
  ) {

    presenterSrv.action$
      .pipe(
        filter( action => action?.type === ActionEnum.PRODUCT_LIST_REQUEST ),
        switchMap( action => productSrv.getProducts() )
      )
      .subscribe( products => {
        presenterSrv.dispatch({type:ActionEnum.PRODUCT_LIST_UPDATE, payload:products})
      })
   }
}
