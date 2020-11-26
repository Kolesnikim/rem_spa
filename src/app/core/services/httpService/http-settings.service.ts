import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { IAuthEnable } from '../../interfaces/auth-enable';
import { AuthService } from '../authService/auth.service';

/**
 * Сервис, отвечающий за запрос настроек авторизации и приложения
 */
@Injectable()
export class HttpSettingsService {
  private readonly authSettingsSubject: BehaviorSubject<IAuthEnable | null>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.authSettingsSubject = new BehaviorSubject<IAuthEnable | null>(null);
  }

  public get getAuthEnable(): Subject<IAuthEnable | null> {
    return this.authSettingsSubject;
  }

  public fetchAuthEnable(): Observable<void> {
    return this.http.get<IAuthEnable | null>(`${environment.baseUrl}general-settings/get-auth-settings`)
      .pipe(map( res => {
        this.authSettingsSubject.next(null);
      }));
  }
}
