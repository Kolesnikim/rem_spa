import { Injectable } from '@angular/core';
import { ActiveModule } from '../../models/active.module';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IApplicationSettings } from '../../interfaces/application-settings';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ConferenceService } from '../conferenceService/conference.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppSettingsService {

  constructor(
    private conference: ConferenceService,
    private http: HttpClient,
    private snackbar: MatSnackBar) {
    this.init();
  }
  private readonly applicationSettingsSubject = new BehaviorSubject<IApplicationSettings>(null);
  private readonly activatedModulesSubject = new BehaviorSubject<ActiveModule[]>(null);

  public applicationSettingsSubject$ = this.applicationSettingsSubject.asObservable();
  public activatedModulesSubject$ = this.activatedModulesSubject.asObservable();

  private availableRoutes: ActiveModule[] = [
    new ActiveModule('Программа', 'schedule'),
    new ActiveModule('Избранное', 'favorites'),
    new ActiveModule('Фотогалерея', 'photogallery'),
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


  private convertToActivateModule(res): ActiveModule[] {
    const activatedModules = [];

    for (const key in res) {
      if (res.hasOwnProperty(key) && /show/.test(key)) {
        if (res[key]) {
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
    const options = { params: null};

    this.conference.conferenceSubject$.subscribe(conference => {
      options.params = new HttpParams().set('conferenceId', `${conference.id}`);
    });
    return this.http
      .get<IApplicationSettings>(`${environment.baseUrl}general-settings/get-general-settings`, options)
      .pipe(
        map( res => {
          this.activatedModulesSubject.next(this.convertToActivateModule(res));
          this.applicationSettingsSubject.next(res);
        }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }
}
