import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/authService/auth.service';
import { HttpService } from '../services/httpService/http.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private http: HttpService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.http.getAuthEnable.isAuthenticationEnabled) {
      const currentUser = this.auth.currentUserValue;

      if (currentUser) {
        return true;
      }

      this.router.navigate(['/user', 'login']);
      return false;
    }

    return true;
  }
}
