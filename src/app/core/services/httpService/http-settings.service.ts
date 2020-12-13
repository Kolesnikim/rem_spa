import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthEnable } from '../../interfaces/auth-enable';
import { ApiService } from '../apiService/api.service';

/**
 * Сервис, отвечающий за запрос настроек авторизации и приложения
 */
@Injectable()
export class HttpSettingsService {
  private readonly authSettingsSubject = new BehaviorSubject<boolean>(false);
  public authSettingsSubject$ = this.authSettingsSubject.asObservable();

  constructor(private apiService: ApiService) {}

  /**
   * Метод, отвечающий за запрос данных о возможности авторизации
   */
  public fetchAuthEnable(): Observable<void> {
    return this.apiService.get<AuthEnable>('general-settings/get-auth-settings')
      .pipe(map( res => {
          this.authSettingsSubject.next(res.isAuthenticationEnabled);
      }));
  }
}
