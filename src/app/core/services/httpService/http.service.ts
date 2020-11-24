import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { IUserInfo } from '../../interfaces/user-info';
import { IAuthEnable } from '../../interfaces/auth-enable';

@Injectable()
export class HttpService {
  private authSettingsSubject: BehaviorSubject<IAuthEnable>;
  public authSettings: Observable<IAuthEnable>;
  public url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.authSettingsSubject = new BehaviorSubject<IAuthEnable>(JSON.parse(localStorage.getItem('authSettings')));
    this.authSettings = this.authSettingsSubject.asObservable();
  }

  public get getAuthEnable(): IAuthEnable {
    return this.authSettingsSubject.value;
  }

  fetchAuthEnable(): Observable<void> {
    return this.http.get<IAuthEnable>(`${environment.baseUrl}general-settings/get-auth-settings`)
      .pipe(map( res => {
        this.authSettingsSubject.next(res);
      }));
  }

  fetchUserInfo(): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(`${environment.baseUrl}account/info`);
  }
}
