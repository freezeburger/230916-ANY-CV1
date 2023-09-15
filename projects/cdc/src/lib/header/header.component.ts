import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cdc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
