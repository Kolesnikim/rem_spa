import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/authService/auth.service';
import { HttpSettingsService } from '../services/httpService/http-settings.service';
import { IAuthEnable } from '../interfaces/auth-enable';
import { IUserInfo } from '../interfaces/user-info';
import { catchError, map } from 'rxjs/operators';

/**
 * Гвард, который получает данные о наличии авторизации.
 * В зависимости от наличия или отсутствия авторизации открывается доступ
 */

@Injectable()
export class AuthGuard implements CanActivate {
  authSettings: IAuthEnable;
  user: IUserInfo;

  constructor(private auth: AuthService, private router: Router, private http: HttpSettingsService) {
    this.http.getAuthEnable.subscribe(res => this.authSettings = res);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authSettings?.isAuthenticationEnabled) {
      this.auth.fetchUserInfo().subscribe();
      this.auth.currentUserValue.pipe(map((user) => {
        if (this.user) {
          return of(true);
        }
      })).pipe(catchError(() => {
        this.router.navigate(['/user', 'login']);
        return of(false);
      }));
    }

    return true;
  }
}
