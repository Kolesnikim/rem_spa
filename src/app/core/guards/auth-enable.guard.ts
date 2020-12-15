import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpSettingsService } from '../services/httpService/http-settings.service';

@Injectable()
export class AuthEnableGuard implements CanActivate {

  constructor(private httpSettings: HttpSettingsService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.httpSettings.authSettingsSubject$;
  }
}
