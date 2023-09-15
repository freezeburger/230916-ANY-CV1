import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PresenterService } from '../../services/presenter.service';
import { ActionEnum } from '../../interfaces/presenter/action.enum';
import { MNotification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class GenericInterceptorService implements HttpInterceptor {

  private presenter = inject(PresenterService)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const notification:MNotification = {
      id:1,
      time:Date.now(),
      text:'Loading...'
    }
    this.presenter.dispatch({type:ActionEnum.APP_NOTIFICATION,payload:notification});
    return next.handle(req);
  }

}
