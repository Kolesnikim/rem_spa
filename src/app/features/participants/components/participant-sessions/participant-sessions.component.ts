import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-participant-sessions',
  template: `
  <div class='sessions_wrapper'>
    <div *ngFor="let session of  mySessions"  class='session'>
      <h3>Время: {{session.startTime}} - {{session.endTime}}</h3>
      <h2>{{session.title}}</h2>
      <h4>Секция: {{session.section}}</h4>
      <h4>Место проведения: {{session.location}}</h4>
    </div>
  </div>
  `,
  styleUrls: ['./participant-sessions.component.scss']
})
export class ParticipantSessionsComponent implements OnInit {
  @Input() id: number;
  session: Session;
  // mySession: Session = {
  //   id: 0,
  //   organization: '',
  //   title: 'Заголовок',
  //   startTime: '12.00',
  //   endTime: '12.30',
  //   location: '123',
  //   section: '1',
  //   speaker: {
  //       name: 'abc',
  //       photoUrl: '111',
  //   }
  // };
  // sessions: Session[];

  mySessions: Session[] = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
