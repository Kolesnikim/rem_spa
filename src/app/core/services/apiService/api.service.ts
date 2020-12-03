import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Вспомогательный сервис для выполнения запросов к api бекенда
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  /**
   * Выполнить get запрос
   * @param path путь запроса
   * @param params параметры запроса
   */
  public get<T = any>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${path}`, { params })
      .pipe(catchError((err) => {
        this.formatErrors(err);
        return throwError(err);
      }));
  }

  /**
   * Выполнить put запрос
   * @param path путь запроса
   * @param body тело запроса
   */
  public put<T = any>(path: string, body: object = {}): Observable<T> {
    return this.http.put<T>(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((err) => {
      this.formatErrors(err);
      return throwError(err);
    }));
  }

  /**
   * Выполнить post запрос
   * @param path путь запроса
   * @param body  тело запроса
   */
  public post<T = any>(path: string, body: object = {}): Observable<T> {
    return this.http.post<T>(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((err) => {
      this.formatErrors(err);
      return throwError(err);
    }));
  }

  /**
   * Выполнить delete запрос
   * @param path путь запроса
   */
  public delete<T = any>(path): Observable<T> {
    return this.http.delete<T>(
      `${environment.baseUrl}${path}`
    ).pipe(catchError((err) => {
      this.formatErrors(err);
      return throwError(err);
    }));
  }

  private formatErrors(error: any): any {
    return throwError(error.error);
  }
}
