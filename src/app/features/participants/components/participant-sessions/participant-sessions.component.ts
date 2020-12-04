import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Session } from '../../models/session.model';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-participant-sessions',
  template: `
  <div class='sessions_wrapper'>
    <div *ngFor="let session of  sessions"  class='session'>
      <h3>Время: {{session.startTime|date:'medium'}} - {{session.endTime|date:'medium'}}</h3>
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
  @Output() isVisibility = new EventEmitter<boolean>();
  public sessions: Session[] = [];

  constructor(private participantService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantService.getParticipantSessions(this.id).subscribe((sessions: Session[]) => {
      sessions.sort((a: Session, b : Session) => {
        let dateA = new Date(a.startTime);
        let dateB = new Date(b.startTime);
        return (Number(dateA)- Number(dateB))
      });
      this.sessions = sessions;

      if(this.sessions.length !== 0){
        this.isVisibility.emit(true);
      }
    });
  }

  
}
