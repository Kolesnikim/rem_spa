import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class PerformanceService {
  private readonly performanceSubject: BehaviorSubject<any>;
  public performance: Observable<any>;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.performanceSubject = new BehaviorSubject<any>(null);
    this.performance = this.performanceSubject.asObservable();

  }
  public fetchPerformance(id): any {
    return this.http.get(`${this.baseUrl}schedule/session/${id}`).pipe(map(performance => {
      this.performanceSubject.next(performance);
    }));
  }


}
