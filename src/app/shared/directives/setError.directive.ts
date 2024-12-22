import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[setError]',
  standalone: true,
})
export class SetErrorDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private _error: string = 'green';

  @Input('error') set setError(value: ValidationErrors | null | undefined) {
    this._error = JSON.stringify(value);
    this.setText();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  setText() {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.innerText = this._error;
  }
}
