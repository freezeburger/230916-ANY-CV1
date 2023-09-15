import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    CardComponent,
    HeaderComponent,
    FormComponent,
    ZoomDirective
  ],
  imports: [
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    CardComponent,
    HeaderComponent,
    FormComponent,
    ZoomDirective
  ]
})
export class CdcModule { }
