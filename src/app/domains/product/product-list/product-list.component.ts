import { Component } from '@angular/core';
import { PresenterDirective } from 'src/app/core/directives/presenter.directive';
import { ActionEnum } from 'src/app/core/interfaces/presenter/action.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends PresenterDirective {

  requestProducts(){
    this.presenter.dispatch({payload:'',type:ActionEnum.PRODUCT_LIST_REQUEST})
  }

}
