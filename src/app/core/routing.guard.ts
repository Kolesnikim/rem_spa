import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { AppSettingsService } from './services/appSettingsService/appSettings.service';

@Injectable({
    providedIn: 'root',
  })
export class RoutingGuard implements CanActivate{

    constructor(private routingService: AppSettingsService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        return this.routingService.isAvailable(route.url.toString());
    }
}
