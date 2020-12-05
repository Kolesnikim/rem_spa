import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/authService/auth.service';
import { HttpSettingsService } from '../services/httpService/http-settings.service';
import { switchMap } from 'rxjs/operators';

/**
 * Гвард, который получает данные о наличии авторизации.
 * В зависимости от наличия или отсутствия авторизации открывается доступ
 */

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private httpSettingsService: HttpSettingsService) {
  }

  /**
   * Метод, активирующий маршрут при наличии данных о бользователе,
   * а также наличии авторизации.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.httpSettingsService.authSettingsSubject$
      .pipe(switchMap((value) => {
        if (!value) {
          return of(true);
        }
        return this.authService.isAuthenticated$;
      }));
  }
}
