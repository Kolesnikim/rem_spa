import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { IUserInfo } from '../../interfaces/user-info';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Сервис, отвечающий за авторизацию:
 * (логин, логаут, запрос данных о авторизованном пользователе)
 */
@Injectable()
export class AuthService {
  private readonly currentUserSubject: BehaviorSubject<IUserInfo>;
  public readonly isAuthenticated: BehaviorSubject<boolean>;

  public url = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router, private snackbar: MatSnackBar ) {
    this.currentUserSubject = new BehaviorSubject<IUserInfo>(null);
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
  }

  /**
   * Геттер, возвращающий субъект данных пользователя
   */
  public get currentUserValue(): BehaviorSubject<IUserInfo> {
    return this.currentUserSubject;
  }


  /**
   * Метод, проверяющий, авторизован ли пользователь.
   * При отсутствии вторизации запрашиваются данные, на которые вовзращается значение авторизации
   * При наличии ошибок пользователь неавторизован. Метод вызывается в гварде
   */

  public isUserAuthenticated(): Observable<boolean> {
    if (this.isAuthenticated?.value) {
      return of(this.isAuthenticated.value);
    } else {
      return this.fetchUserInfo().pipe(map(() => {
        this.isAuthenticated.next(true);
        return this.isAuthenticated.value;
        }),
        catchError(() => {
          return of(this.isAuthenticated.value);
        })
      );
    }
  }

  /**
   * Метод, отвечающий за авторизацию пользователя
   * информация о пользователе сохраняется в субъекте
   */
  public login(login: string, password: string): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}auth/login`, { login, password })
      .pipe(map(() => {
        this.isAuthenticated.next(true);
        this.router.navigate(['/']);
    }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }

  /**
   * Метод, отвечающий за запрос данных о пользователе после авторизации
   */
  public fetchUserInfo(): Observable<void> {
    return this.http.get<IUserInfo>(`${environment.baseUrl}account/info`)
      .pipe(map(user => {
        this.currentUserSubject.next(user);
      }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }

  /**
   * Метод, отвечающий за выход пользователя из системы
   */
  public logout(): Observable<void> {
    return this.http.get(`${environment.baseUrl}auth/logout`)
      .pipe(map(() => {
        this.currentUserSubject.next(null);
        this.isAuthenticated.next(false);
        this.router.navigate(['/']);
      }));
  }
}
