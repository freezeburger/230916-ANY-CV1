import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { PresenterService } from '../../services/presenter.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionEnum } from '../../interfaces/presenter/action.enum';
import { MNotification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class RouterMiddlewareService {

  constructor(
    public router: Router,
    private presenter:PresenterService
    ) {
    router.events.pipe(
       filter((e: Event | NavigationEnd): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {

      const url = e.url.replace('/','');
      const routeConfig = router.config.filter( c => c.path?.includes(url))[0];
      const matchers = routeConfig?.canMatch;

      const rejected = matchers?.some( m => m() === false);
      if(rejected){
        const notification:MNotification = {
          id:1,
          text:'Navigation Impossible sans Authentification',
          time:Date.now()
        }
        this.presenter.dispatch({type:ActionEnum.APP_NOTIFICATION, payload:notification })
      }

    });
  }
}
