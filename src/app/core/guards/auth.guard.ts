import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthService } from '../services/authService/auth.service';
import { HttpSettingsService } from '../services/httpService/http-settings.service';
import { IUserInfo } from '../interfaces/user-info';
import { map } from 'rxjs/operators';

/**
 * Гвард, который получает данные о наличии авторизации.
 * В зависимости от наличия или отсутствия авторизации открывается доступ
 */

@Injectable()
export class AuthGuard implements CanActivate {
  authEnable: BehaviorSubject<boolean>;
  user: IUserInfo;
  isAuth: BehaviorSubject<boolean>;

  constructor(private auth: AuthService, private router: Router, private http: HttpSettingsService) {
    this.authEnable = this.http.getAuthEnable;
    this.isAuth = this.auth.isAuthenticated;
  }

  /**
   * Метод, активирующий маршрут при наличии данных о бользователе,
   * а также наличии авторизации.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const authEnable = this.authEnable.value;
    const isAuth = this.isAuth.value;

    if (!isAuth && authEnable) {
      return this.auth.fetchUserInfo().pipe(map(() => {
        if (!this.isAuth.value) {
          this.router.navigate(['user/', 'login']);
          return false;
        } else {
          return true;
        }
      }));
    }
    return true;
  }
}
