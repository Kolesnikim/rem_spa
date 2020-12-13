import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceService } from '../../../../core/services/conferenceService/conference.service';
import { Schedule } from '../../interfaces/schedule';
import { ApiService } from '../../../../core/services/apiService/api.service';

@Injectable()
export class ScheduleService {
  conferenceId: number | undefined;

  constructor(
    private apiService: ApiService,
    private conference: ConferenceService) {
    this.conference.conferenceSubject$.subscribe(conf => {
      this.conferenceId = conf?.id;
    });
  }

  /**
   * Метод, отвечающий за запрос расписания по конкретной конференции.
   * Возвращает неотформатированные данные.
   */
  public fetchSchedule(): Observable<Schedule[]> {
    return this.apiService.get<Schedule[]>(`schedule/conference/${this.conferenceId}`);
  }
}
