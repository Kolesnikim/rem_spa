import { Injectable } from '@angular/core';
import { ActiveModule } from '../../models/active.module';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { IApplicationSettings } from '../../interfaces/application-settings';
import { map } from 'rxjs/operators';
import { ConferenceService } from '../conferenceService/conference.service';
import { ApiService } from '../apiService/api.service';
import { IConference } from '../../interfaces/conference';

@Injectable()
export class AppSettingsService {

  constructor(
    private conference: ConferenceService,
    private apiService: ApiService) {
    this.init();
  }
  private readonly applicationSettingsSubject = new BehaviorSubject<IApplicationSettings | null>(null);
  private readonly activatedModulesSubject = new BehaviorSubject<ActiveModule[] | null>(null);

  public applicationSettingsSubject$ = this.applicationSettingsSubject.asObservable();
  public activatedModulesSubject$ = this.activatedModulesSubject.asObservable();

  private availableRoutes: ActiveModule[] = [
    new ActiveModule('Программа', 'schedule'),
    new ActiveModule('Избранное', 'favorites'),
    new ActiveModule('Фотогалерея', 'photogallery'),
    new ActiveModule('Участники', 'participants'),
    new ActiveModule('Спонсоры', 'sponsors'),
    new ActiveModule('Документы', 'documents'),
    new ActiveModule('Профиль', 'user'),
    new ActiveModule('О приложении', 'about')];

  /**
   * Метод, запрашивающий данные о конференции и настройках при иницилизации
   */
  private init(): void {
    this.conference.fetchConference().subscribe(() => {
      this.fetchApplicationSettings().subscribe();
    });
  }


  private convertToActivateModule(res: IApplicationSettings): ActiveModule[] {
    const activatedModules = [];

    type Keys = keyof IApplicationSettings;

    for (const key in res) {
      if (res.hasOwnProperty(key) && /show/.test(key)) {
        const typedKey: Keys = key as Keys;
        const showedModule = res[typedKey];
        if (showedModule) {
          activatedModules.push(key.slice(4).toLowerCase());
        }
      }
    }

    const newRoutes = [];
    for (const activatedModule of activatedModules) {
      for (const availableRoute of this.availableRoutes) {
        if (availableRoute.Path === activatedModule) {
          newRoutes.push(availableRoute);
        }
      }
    }

    return newRoutes;
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
    let conference: IConference | undefined;
    this.conference.conferenceSubject$.subscribe(conf => conference = conf);
    return this.apiService
      .get<IApplicationSettings>('general-settings/get-general-settings', new HttpParams().set('conferenceId', `${conference?.id}`))
      .pipe(
        map( res => {
          this.activatedModulesSubject.next(this.convertToActivateModule(res));
          this.applicationSettingsSubject.next(res);
        }));
  }
}
