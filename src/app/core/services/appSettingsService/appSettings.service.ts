import { Injectable } from '@angular/core';
import { ActiveModule } from '../../models/active.module';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { IApplicationSettings } from '../../interfaces/application-settings';
import { map } from 'rxjs/operators';
import { ConferenceService } from '../conferenceService/conference.service';
import { ApiService } from '../apiService/api.service';
import { Conference } from '../../interfaces/conference';

@Injectable()
export class AppSettingsService {

  constructor(
    private conference: ConferenceService,
    private apiService: ApiService) {
    this.init();
  }
  private readonly applicationSettingsSubject = new BehaviorSubject<IApplicationSettings | null>(null);
  private readonly activatedModulesSubject = new ReplaySubject<ActiveModule[]>(1);

  public applicationSettingsSubject$ = this.applicationSettingsSubject.asObservable();
  public activatedModulesSubject$ = this.activatedModulesSubject.asObservable();

  private availableRoutes: ActiveModule[] = [];


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
   * Метод, запрашивающий данные о конференции и настройках при иницилизации
   */
  private init(): void {
    this.conference.fetchConference().subscribe(() => {
      this.fetchApplicationSettings().subscribe();
    });
  }

  /**
   * Получить список доступных модулей
   * @returns массив доступных модулей
   */
  getAvailableModules(): ActiveModule[] {
    return this.availableRoutes;
  }

  /**
   * Метод, отвечающий за запрос настроек приложения
   */
  public fetchApplicationSettings(): Observable<void> {
    let conference: Conference | undefined;
    this.conference.conferenceSubject$.subscribe(conf => conference = conf);
    return this.apiService
      .get<IApplicationSettings>('general-settings/get-general-settings', new HttpParams().set('conferenceId', `${conference?.id}`))
      .pipe(
        map( res => {
          this.activatedModulesSubject.next(AppSettingsService.convertToActivateModule(res));
          this.applicationSettingsSubject.next(res);
        }));
  }
}
