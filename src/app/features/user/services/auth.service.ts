import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router, private user: HttpService ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}auth/login`, { login, password })
      .pipe(map(() => {
        this.user.getUserInfo().subscribe(res => {
          localStorage.setItem('currentUser', JSON.stringify(res.fullName));
          this.router.navigate(['/user', 'profile']);
          this.currentUserSubject.next(res);
        });
      }));
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.baseUrl}auth/logout`)
      .pipe(map(() => {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
        this.currentUserSubject.next(null);
      }));
  }

}
