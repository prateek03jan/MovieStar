import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './shared/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLoggedIn();;
  }

  checkUserLoggedIn(): boolean {
    if (LoginService.isUserValidated) {
      return LoginService.isUserValidated;
    } else {
      this.router.navigateByUrl('/welcome');
    }
  }

}
