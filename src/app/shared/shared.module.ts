import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './pipes/name.pipe';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { NullChechDirective } from './directives/null-chech.directive';



@NgModule({
  declarations: [NamePipe, EmailValidatorDirective, NullChechDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
