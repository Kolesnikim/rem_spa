import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {ConferenceService} from '../../../../core/services/conferenceService/conference.service';
import {ISchedule} from '../../interfaces/schedule';

@Injectable()
export class ScheduleService {
  scheduleSubject: BehaviorSubject<any>;
  conferenceId: number;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private conference: ConferenceService) {
    this.scheduleSubject = new BehaviorSubject<any>(null);
    this.conference.getConference.subscribe(conf => {
      this.conferenceId = conf.id;
    });
  }

  public fetchSchedule(): Observable<void> {
    return this.http.get<ISchedule[]>(`${this.baseUrl}schedule/conference/${this.conferenceId}`)
      .pipe(map(schedule => {
        console.log(schedule);

        this.scheduleSubject.next(schedule);
      }));
  }
}
