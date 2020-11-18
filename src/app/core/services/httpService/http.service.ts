import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService {
  private authEnable: BehaviorSubject<any>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.authEnable = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('authEnable')));
  }

  public get getAuthEnable(): any {
    return this.authEnable.value;
  }

  // Observable<any>
  fetchAuthEnable(): void {
    this.authEnable.next(true);
  }

  fetchUserInfo(): Observable<any> {
    return this.http.get(`${environment.baseUrl}account/info`);
  }
}
