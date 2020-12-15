import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppSettingsService } from '../services/appSettingsService/appSettings.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ActiveModulesGuard implements CanActivate {

    constructor(private appSettingsService: AppSettingsService, private router: Router) {
    }

  /**
   * Метод, вызываемый при вызове роута
   * Разрешает маршрут, если в доступных роутах текущий роут совпадает с одним из элементов
   */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.appSettingsService.activatedModulesSubject$
          .pipe(switchMap(value => {
            if (value?.findIndex(el => el.Path === route.url.toString()) !== -1) {
              return of(true);
            }
            this.router.navigate(['/']);
            return of(false);
          }));
    }
}
