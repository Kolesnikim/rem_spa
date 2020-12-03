import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../models/session.model';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-participant-sessions',
  template: `
  <div class='sessions_wrapper'>
    <div *ngFor="let session of  sessions"  class='session'>
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
  public sessions: Session[] = [];

  constructor(private participantService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantService.getParticipantSessions(this.id).subscribe((sessions: Session[]) => {
      this.sessions = sessions;
      console.log(sessions);
    });
  }
}
