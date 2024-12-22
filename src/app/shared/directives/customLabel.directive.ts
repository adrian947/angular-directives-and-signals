import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'green';

  @Input('customLabel') set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }
}
