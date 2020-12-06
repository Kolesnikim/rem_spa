import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { IConference } from '../../interfaces/conference';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: CoreModule
})
export class ConferenceService {
  public url = environment.baseUrl;
  private readonly conferenceSubject = new BehaviorSubject<IConference>(null);
  public conferenceSubject$ = this.conferenceSubject.asObservable();

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar) {}

  /**
   * Метод, отвечающий за запрос данных о конференции
   * Вызывается при старте в APP_INITIALIZER
   */
  public fetchConference(): Observable<void> {
    return this.http.get<IConference>(`${this.url}conference/get-conference`)
      .pipe(map(conference => {
        this.conferenceSubject.next(conference);
      }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }
}
