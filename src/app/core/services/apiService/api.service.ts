import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить put запрос
   * @param path путь запроса
   * @param body тело запроса
   */
  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить post запрос
   * @param path путь запроса
   * @param body  тело запроса
   */
  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Выполнить delete запрос
   * @param path путь запроса
   */
  public delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
