import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static isUserValidated: boolean = false;

  constructor() { }

  validateUserLogin(userName: string, password: string): Observable<boolean> {
    if (userName === 'test@test.com' && password === 'test') {
      LoginService.isUserValidated = true;
    } else {
      LoginService.isUserValidated = false;
    }
    return of(LoginService.isUserValidated);
  }
}
