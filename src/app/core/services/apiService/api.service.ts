import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from '@angular/router';

/**
 * Вспомогательный сервис для выполнения запросов к api бекенда
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private formatErrors(error: any): any {
    return  throwError(error.error);
  }

  /**
   * Выполнить get запрос
   * @param path путь запроса
   * @param params параметры запроса
   */
  public get<T = any>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<any>(`${environment.baseUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить put запрос
   * @param path путь запроса
   * @param body тело запроса
   */
  public put<T = any>(path: string, body: object = {}): Observable<T> {
    return this.http.put<any>(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить post запрос
   * @param path путь запроса
   * @param body  тело запроса
   */
  public post<T = any>(path: string, body: object = {}): Observable<T> {
    return this.http.post<any>(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить delete запрос
   * @param path путь запроса
   */
  public delete<T = any>(path): Observable<T> {
    return this.http.delete<any>(
      `${environment.baseUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
