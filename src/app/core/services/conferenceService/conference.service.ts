import { Injectable } from '@angular/core';
import {CoreModule} from '../../core.module';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {IConference} from '../../interfaces/conference';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class ConferenceService {
  public url = environment.baseUrl;
  private readonly conferenceSubject: ReplaySubject<IConference>;

  constructor(private http: HttpClient) {
    this.conferenceSubject = new ReplaySubject<IConference>(null);
  }

  public get getConference(): ReplaySubject<IConference> {
    return this.conferenceSubject;
  }

  public fetchConference(): Observable<void> {
    return this.http.get<IConference>(`${this.url}conference/get-conference`)
      .pipe(map(conference => {
        this.conferenceSubject.next(conference);
      }));
  }
}
