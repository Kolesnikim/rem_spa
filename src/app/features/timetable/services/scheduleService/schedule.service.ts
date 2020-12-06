import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ConferenceService } from '../../../../core/services/conferenceService/conference.service';
import { ISchedule } from '../../interfaces/schedule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ScheduleService {
  private readonly scheduleSubject = new BehaviorSubject<any>(null);
  public scheduleSubject$ = this.scheduleSubject.asObservable();

  conferenceId: number;
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private conference: ConferenceService,
    private snackbar: MatSnackBar) {
    this.conference.conferenceSubject$.subscribe(conf => {
      this.conferenceId = conf.id;
    });
  }
  /**
   * Метод, отвечающий за запрос расписания по конкретной конференции.
   * Возвращает неотформатированные данные.
   */
  public fetchSchedule(): Observable<void> {
    return this.http.get<ISchedule[]>(`${this.baseUrl}schedule/conference/${this.conferenceId}`)
      .pipe(map(schedule => {
        this.scheduleSubject.next(schedule);
      }),
        catchError((err) => {
          this.snackbar.open('Что-то произошло. Попробуйте позднее', 'Закрыть', {
            duration: 2000,
          });
          return throwError(err);
        }));
  }
}
