import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { IAuthEnable } from '../../interfaces/auth-enable';
import { AuthService } from '../authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Сервис, отвечающий за запрос настроек авторизации и приложения
 */
@Injectable()
export class HttpSettingsService {
  private readonly authSettingsSubject: BehaviorSubject<boolean>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient, private auth: AuthService, private snackbar: MatSnackBar) {
    this.authSettingsSubject = new BehaviorSubject<boolean>(false);
  }

  /**
   * Геттер, возвращающий субъект настроек авторизации
   */
  public get getAuthEnable(): BehaviorSubject<boolean> {
    return this.authSettingsSubject;
  }

  /**
   * Метод, отвечающий за запрос данных о возможности авторизации
   */
  public fetchAuthEnable(): Observable<void> {
    return this.http.get<IAuthEnable>(`${environment.baseUrl}general-settings/get-auth-settings`)
      .pipe(
        map( res => {
          this.authSettingsSubject.next(res?.isAuthenticationEnabled);
      }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }
}
