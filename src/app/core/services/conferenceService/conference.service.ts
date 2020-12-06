import { Injectable } from '@angular/core';
import {CoreModule} from '../../core.module';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable, BehaviorSubject} from 'rxjs';
import {IConference} from '../../interfaces/conference';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class ConferenceService {
  public url = environment.baseUrl;
  private readonly conferenceSubject = new BehaviorSubject<IConference>(null);
  public conferenceSubject$ = this.conferenceSubject.asObservable();

  constructor(private http: HttpClient) {}

  public fetchConference(): Observable<void> {
    return this.http.get<IConference>(`${this.url}conference/get-conference`)
      .pipe(map(conference => {
        this.conferenceSubject.next(conference);
      }));
  }
}
