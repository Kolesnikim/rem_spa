import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserInfo } from '../../interfaces/user-info';
import { ApiService } from '../apiService/api.service';

/**
 * Сервис, отвечающий за авторизацию:
 * (логин, логаут, запрос данных о авторизованном пользователе)
 */
@Injectable()
export class AuthService {
  private readonly currentUserSubject = new BehaviorSubject<UserInfo | null>(null);
  private readonly isAuthenticated = new ReplaySubject<boolean>(1);
  public currentUserSubject$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.isAuthenticated.asObservable();


  constructor(
    private apiService: ApiService,
    private router: Router) {
      this.init();
  }

  private init(): void {
    this.fetchUserInfo().subscribe(() => {
      this.isAuthenticated.next(true);
    });
  }

  /**
   * Метод, отвечающий за авторизацию пользователя
   * информация о пользователе сохраняется в субъекте
   */
  public login(login: string, password: string): Observable<void> {
    return this.apiService.post('auth/login', { login, password })
      .pipe(map(() => {
        this.isAuthenticated.next(true);
        this.router.navigate(['/']);
      }));
  }

  /**
   * Метод, отвечающий за запрос данных о пользователе после авторизации
   */
  public fetchUserInfo(): Observable<void> {
    return this.apiService.get<UserInfo>('account/info')
      .pipe(map(user => {
        this.currentUserSubject.next(user);
      }));
  }

  /**
   * Метод, отвечающий за выход пользователя из системы
   */
  public logout(): Observable<void> {
    return this.apiService.get('auth/logout')
      .pipe(map(() => {
        this.currentUserSubject.next(null);
        this.isAuthenticated.next(false);
        this.router.navigate(['/login']);
      }));
  }
}
