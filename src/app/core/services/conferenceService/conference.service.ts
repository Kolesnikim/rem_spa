import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IConference } from '../../interfaces/conference';
import { map } from 'rxjs/operators';
import { ApiService } from '../apiService/api.service';

@Injectable()
export class ConferenceService {
  private readonly conferenceSubject = new BehaviorSubject<IConference | undefined>(undefined);
  public conferenceSubject$ = this.conferenceSubject.asObservable();

  constructor(private apiService: ApiService) {}

  /**
   * Метод, отвечающий за запрос данных о конференции
   * Вызывается при старте в APP_INITIALIZER
   */
  public fetchConference(): Observable<void | IConference> {
    return this.apiService.get<IConference>('conference/get-conference')
      .pipe(map(conference => {
        this.conferenceSubject.next(conference);
      }));
  }
}
