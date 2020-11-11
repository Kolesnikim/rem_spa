import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
   return this.http.get(`${environment.baseUrl}account/info`);
 }
}
