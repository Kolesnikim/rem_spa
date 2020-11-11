import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
   return this.http.get('https://localhost:5001/api/account/info');
 }
}
