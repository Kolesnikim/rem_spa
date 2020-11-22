import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

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

  fetchAuthEnable(): Observable<any> {
    return this.http.get(`${environment.baseUrl}general-settings/get-auth-settings`)
      .pipe(map((res: any) => {
        this.authEnable.next(res.isAuthenticationEnabled);
      }));
  }

  fetchUserInfo(): Observable<any> {
    return this.http.get(`${environment.baseUrl}account/info`);
  }
}
