import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }


  login(login: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/users/login', { login, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/user', 'profile']);
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): Observable<any> {
    return this.http.get('localhost:8080/api/v1/user/logout')
      .pipe(map(() => {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
        this.currentUserSubject.next(null);
      }));
  }

}
