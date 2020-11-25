import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { IUserInfo } from '../../interfaces/user-info';

/**
 * Сервис, отвечающий за авторизацию:
 * (логин, логаут, запрос данных о авторизованном пользователе
 */
@Injectable()
export class AuthService {
  public currentUserSubject: BehaviorSubject<IUserInfo>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router ) {
    this.currentUserSubject = new BehaviorSubject<IUserInfo>(null);
  }

  public get currentUserValue(): Observable<IUserInfo> {
    return this.currentUserSubject;
  }

  public login(login: string, password: string): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}auth/login`, { login, password })
      .pipe(map(() => {
      this.fetchUserInfo().subscribe();
      this.router.navigate(['/']);
    }));
  }

  public fetchUserInfo(): Observable<any> {
    return this.http.get<IUserInfo>(`${environment.baseUrl}account/info`)
      .pipe(map(user => {
        this.currentUserSubject.next(user);
      }));
  }

  public logout(): Observable<void> {
    return this.http.get(`${environment.baseUrl}auth/logout`)
      .pipe(map(() => {
        this.router.navigate(['/']);
        this.currentUserSubject.next(null);
      }));
  }
}
