import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Inject, ElementRef, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';

export type ButtonColors = 'RED' | 'GREEN' | 'BLUE';

@Component({
  selector: 'cdc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements AfterViewInit {

  @Input() public color: ButtonColors | null = null;

  constructor(
    @Inject(ElementRef) private element: ElementRef,
    @Inject(ChangeDetectorRef) private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {
  }
  ngAfterViewInit(): void {
    this.element.nativeElement.classList.add(this.color?.toLocaleLowerCase())
  }

}
