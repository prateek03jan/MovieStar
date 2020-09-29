import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appMandatoryField]'
})
export class NullChechDirective {

  constructor(private elementRef: ElementRef) { }

  movieName: string;
  @Input() movie: string;
  @Output('onNoTextWritten') noTextWritten: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('keyup') onKeyUp() {
    this.movieName = this.elementRef.nativeElement.value;
    this.validateRequiredField(this.movieName);
  }


  validateRequiredField(movieName: string) {
    if (movieName === '') {
      this.elementRef.nativeElement.classList.add('error-field');
      this.isValidTextWritten(false);
    } else {
      this.elementRef.nativeElement.classList.remove('error-field');
    }
  }

  isValidTextWritten(isValidData: boolean) {
    this.noTextWritten.emit(isValidData);
    this.isValidTextWritten(true);
  }

}
