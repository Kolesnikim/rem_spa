import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn = false;

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/users/login', { email, password });
  }

  logout(): Observable<any> {
    return this.http.get('localhost:8080/api/v1/user/logout');
  }
}
