import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Session } from '../../models/session.model';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-participant-sessions',
  templateUrl: './participant-sessions.component.html',
  styleUrls: ['./participant-sessions.component.scss']
})
export class ParticipantSessionsComponent implements OnInit {
  @Input() id: number;
  @Output() isVisibilitySession = new EventEmitter<boolean>();
  public sessions: Session[] = [];

  constructor(private participantService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantService.getParticipantSessions(this.id).subscribe((sessions: Session[]) => {
      sessions.sort((a: Session, b: Session) => {
        const dateA = new Date(a.startTime);
        const dateB = new Date(b.startTime);
        return (Number(dateA) - Number(dateB));
      });
      this.sessions = sessions;

      if (this.sessions.length !== 0) {
        this.isVisibilitySession.emit(true);
      }
    });
  }

}
