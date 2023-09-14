import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cdc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

}
