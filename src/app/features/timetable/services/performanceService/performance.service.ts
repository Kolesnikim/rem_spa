import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPerformance } from '../../interfaces/performance';
import { IComment } from '../../interfaces/comment';

@Injectable()
export class PerformanceService {
  private readonly performanceSubject = new BehaviorSubject<any>(null);
  public performance = this.performanceSubject.asObservable();
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar) {}

  /**
   * Метод, отвечающий за запрос данных о выступлении в зависимости от идентификатора,
   * переданного в качестве параметра
   */
  public fetchPerformance(id): Observable<void> {
    return this.http.get<IPerformance>(`${this.baseUrl}schedule/session/${id}`)
      .pipe(map(performance => {
      this.performanceSubject.next(performance);
    }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }

  /**
   * Метод, отвечающий за отправку анонимного комментария на сервер
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postAnonymousComment(comment): Observable<void> {
    const id = comment.sessionId;
    return this.http.post<IComment>(`${this.baseUrl}schedule/post-anonymous-comment-to-session`, comment)
      .pipe(map(() => {
      this.fetchPerformance(id).subscribe();
    }), catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }

  /**
   * Метод, отвечающий за отправку комментария на сервер от авторизованного пользователя
   * При успешном выполнении запрашивает обновленные данные о выступлении
   */
  public postComment(comment): Observable<any> {
    const id = comment.sessionId;
    return this.http.post<IComment>(`${this.baseUrl}schedule/post-comment-to-session`, comment)
      .pipe(map(() => {
        this.fetchPerformance(id).subscribe();
      }), catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }
}
