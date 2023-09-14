import { Directive, inject } from '@angular/core';
import { ActionEnum } from '../interfaces/presenter/action.enum';
import { State } from '../interfaces/presenter/state';
import { PresenterComponent } from '../interfaces/patterns/presenter-component';
import { PresenterService } from '../services/presenter.service';

@Directive({
  selector: '[appPresenter]'
})
export class PresenterDirective implements PresenterComponent<State, ActionEnum>{
  // Functionnal Inject - Angular 16
  presenter = inject(PresenterService);
}
