import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpSettingsService } from '../services/httpService/http-settings.service';

@Injectable()
export class AuthEnableGuard implements CanActivate {

  constructor(private httpSettings: HttpSettingsService) {
  }

  /**
   * Метод, срабатывающий при запросе страницы логина
   * Срабатывает при активированной авторизации
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.httpSettings.authSettingsSubject$;
  }
}
