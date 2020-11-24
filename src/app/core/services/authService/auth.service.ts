import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService} from '../httpService/http.service';
import { environment } from '../../../../environments/environment';
import { IUserInfo } from '../../interfaces/user-info';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<IUserInfo | null>;
  public currentUser: Observable<IUserInfo | null>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router, private user: HttpService ) {
    this.currentUserSubject = new BehaviorSubject<IUserInfo | null>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUserInfo | null {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string): Observable<void> {
    return this.http.post(`${environment.baseUrl}auth/login`, { login, password })
      .pipe(map(() => {
        this.user.fetchUserInfo().subscribe(res => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(['/']);
          this.currentUserSubject.next(res);
        });
      }));
  }

  logout(): Observable<void> {
    return this.http.get(`${environment.baseUrl}auth/logout`)
      .pipe(map(() => {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
        this.currentUserSubject.next(null);
      }));
  }
}
