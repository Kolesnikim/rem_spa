import { Injectable } from '@angular/core';
import {TimetableModule} from '../../timetable.module';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpSettingsService} from '../../../../core/services/httpService/http-settings.service';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: TimetableModule
})
export class ScheduleService {
  schedule: BehaviorSubject<any>;
  conferenceId: number;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private httpSettings: HttpSettingsService) {
    this.httpSettings.getConference.subscribe(conf => this.conferenceId = conf.id);
    this.schedule = new BehaviorSubject<any>(null);
  }

  public fetchSchedule(): Observable<void> {
    return this.http.get<any>(`${this.baseUrl}schedule/conference/${this.conferenceId}`)
      .pipe(map());
  }
}
