import { Injectable } from '@angular/core';
import { PresenterService } from '../../services/presenter.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerMiddlewareService {

  constructor(
   private presenter:PresenterService
  ) {
    this.presenter.action$.subscribe( console.table )
  }
}
