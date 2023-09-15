import { Injectable } from '@angular/core';
import { PresenterService } from '../../services/presenter.service';
import { ProductService } from '../../services/product.service';
import { ActionEnum } from '../../interfaces/presenter/action.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductMiddlewareService {

  constructor(
    presenterSrv:PresenterService,
    productSrv:ProductService
  ) {

    presenterSrv.action$.subscribe( async action => {

      if( action?.type !== ActionEnum.PRODUCT_LIST_REQUEST) return;

      const products = await productSrv.getProducts();
      presenterSrv.dispatch({type:ActionEnum.MESSAGE_LIST_UPDATE, payload:products})

    })

   }
}
