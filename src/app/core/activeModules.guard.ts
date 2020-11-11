import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { AppSettingsService } from './services/appSettingsService/appSettings.service';

@Injectable({
    providedIn: 'root',
  })
export class ActiveModulesGuard implements CanActivate{

    constructor(private appSettingsService: AppSettingsService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        return this.appSettingsService.isModuleAvailable(route.url.toString());
    }
}
