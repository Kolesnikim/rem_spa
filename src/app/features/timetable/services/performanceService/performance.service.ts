import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPerformance } from '../../interfaces/performance';

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
}
