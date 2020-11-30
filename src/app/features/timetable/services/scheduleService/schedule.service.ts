import { Injectable } from '@angular/core';
import {TimetableModule} from '../../timetable.module';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {ConferenceService} from '../../../../core/services/conferenceService/conference.service';
import {map} from 'rxjs/operators';
import {ISchedule} from '../../interfaces/schedule';

@Injectable()
export class ScheduleService {
  scheduleSubject: BehaviorSubject<any>;
  conferenceId: number;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private conference: ConferenceService) {
    this.conference.getConference.subscribe(conf => this.conferenceId = conf.id);
    this.scheduleSubject = new BehaviorSubject<any>(null);
  }

  public fetchSchedule(): Observable<void> {
    return this.http.get<ISchedule>(`${this.baseUrl}schedule/conference/${this.conferenceId}`)
      .pipe(map(schedule => {
        this.scheduleSubject.next(schedule);
        console.log(schedule);
      }));
  }
}
