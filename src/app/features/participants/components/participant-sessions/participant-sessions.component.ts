import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-participant-sessions',
  template: `
  <div class='sessions_wrapper'>
    <!-- <div *ngFor="let session of sessions"> -->
      <h1>Название: {{mySession.title}}</h1>
      <h2>Секция: {{mySession.section}}</h2>
      <h3>Место проведения: {{mySession.location}}</h3>
      <h6>Время: {{mySession.startTime}} - {{mySession.endTime}}</h6>
    <!-- </div> -->
  </div>
  `,
  styleUrls: ['./participant-sessions.component.scss']
})
export class ParticipantSessionsComponent implements OnInit {
  @Input() id: number;
  session: Session;
  mySession: Session = {
    id: 0,
    organization: '',
    title: 'Заголовок',
    startTime: '12.00',
    endTime: '12.30',
    location: '123',
    section: '1',
    speaker: {
        name: 'abc',
        photoUrl: '111',
    }
  };
  sessions: Session[];

  constructor() { }

  ngOnInit(): void {
  }

}
