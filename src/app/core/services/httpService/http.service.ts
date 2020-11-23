import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { IUserInfo } from '../../interfaces/user-info';
import { IAuthEnable } from '../../interfaces/auth-enable';

@Injectable()
export class HttpService {
  private authSettings: BehaviorSubject<IAuthEnable>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.authSettings = new BehaviorSubject<IAuthEnable>(JSON.parse(localStorage.getItem('authSettings')));
  }

  public get getAuthEnable(): IAuthEnable {
    return this.authSettings.value;
  }

  fetchAuthEnable(): Observable<void> {
    return this.http.get<IAuthEnable>(`${environment.baseUrl}general-settings/get-auth-settings`)
      .pipe(map( res => {
        this.authSettings.next(res);
      }));
  }

  fetchUserInfo(): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(`${environment.baseUrl}account/info`);
  }
}
