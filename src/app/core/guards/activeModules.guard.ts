import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppSettingsService } from '../services/appSettingsService/appSettings.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ActiveModulesGuard implements CanActivate {

    constructor(private appSettingsService: AppSettingsService) {
    }

  /**
   * Метод, вызываемый при вызове роута
   * Разрешает маршрут, если в доступных роутах текущий роут совпадает с одним из элементов
   */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.appSettingsService.activatedModulesSubject$
          .pipe(switchMap(value => {
            return of(value.findIndex(el => el.Path === route.url.toString()) !== -1);
          }));
    }
}
