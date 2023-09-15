import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cdc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
