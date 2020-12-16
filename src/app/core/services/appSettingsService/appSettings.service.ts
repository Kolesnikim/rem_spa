import { Injectable } from '@angular/core';
import { ActiveModule } from '../../models/active.module';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { IApplicationSettings } from '../../interfaces/application-settings';
import { map } from 'rxjs/operators';
import { ConferenceService } from '../conferenceService/conference.service';
import { ApiService } from '../apiService/api.service';

@Injectable()
export class AppSettingsService {
  private readonly applicationSettingsSubject = new BehaviorSubject<IApplicationSettings | null>(null);
  private readonly activatedModulesSubject = new ReplaySubject<ActiveModule[]>(1);

  constructor(
    private conference: ConferenceService,
    private apiService: ApiService) {
    this.init();
  }

  public applicationSettingsSubject$ = this.applicationSettingsSubject.asObservable();
  public activatedModulesSubject$ = this.activatedModulesSubject.asObservable();

  /**
   * Метод, извлекающий из настроек приложения доступные модули
   */
  private static convertToActivateModule(res: IApplicationSettings): ActiveModule[] {
    const activatedModulesRoutes = [];
    const activatedModulesNameplates = [];

    type Keys = keyof IApplicationSettings;

    for (const key in res) {
      if (res.hasOwnProperty(key) && /show/.test(key)) {
        const typedKey: Keys = key as Keys;
        const showedModule = res[typedKey];
        if (showedModule) {
          activatedModulesRoutes.push(key.slice(4).toLowerCase());
        }
      }
    }

    for (const key in res) {
      if (res.hasOwnProperty(key) && /Nameplate/.test(key)) {
        const typedKey: Keys = key as Keys;
        const showedModule = res[typedKey];
        if (showedModule) {
          activatedModulesNameplates.push({[key.toLowerCase()]: res[typedKey]});
        }
      }
    }

    const newRoutes = [];
    for (const activatedModule of activatedModulesRoutes) {
      for (const modulesNameplate of activatedModulesNameplates) {
        const regExp = new RegExp(`${activatedModule}`);
        const objectKey = Object.keys(modulesNameplate)[0];

        if (regExp.test(objectKey)) {
          newRoutes.push(new ActiveModule(modulesNameplate[objectKey].toString(), activatedModule));
        }
      }
    }
    return newRoutes;
  }

  /**
   * Метод, отвечающий за запрос настроек приложения
   */
  public fetchApplicationSettings(conferenceId: number): Observable<IApplicationSettings> {
    return this.apiService
      .get<IApplicationSettings>('general-settings/get-general-settings', new HttpParams().set('conferenceId', `${conferenceId}`))
      .pipe(
        map( res => {
          this.activatedModulesSubject.next(AppSettingsService.convertToActivateModule(res));
          this.applicationSettingsSubject.next(res);
          return res;
        }));
  }

  /**
   * Метод, запрашивающий данные о конференции и настройках при иницилизации
   */
  private init(): void {
    this.conference.fetchConference().subscribe((conference) => {
      this.fetchApplicationSettings(conference.id).subscribe();
    });
  }
}
