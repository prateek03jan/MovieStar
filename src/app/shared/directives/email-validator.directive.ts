import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  constructor(private elementRef: ElementRef) { }

  @Output('noEmailEntered') noEmailEntered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('onInvalidEmailEntered') invalidEmailEntered: EventEmitter<boolean> = new EventEmitter<boolean>();
  emailInput: string;

  @HostListener('keyup') onKeyUp() {
    this.emailInput = this.elementRef.nativeElement.value;
    this.emailIsValid(this.emailInput);
  }

  emailIsValid(email) {
    if (email === '') {
      this.noEmailEntered.emit(true);
    } else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      this.invalidEmailEntered.emit(true);
    } else {
      this.invalidEmailEntered.emit(false);
    }
  }
}
