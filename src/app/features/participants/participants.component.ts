import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './models/participant.model';
import { ParticipantRole } from './models/interfaces/participantRole.interface';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  public idConference = 1;
  public activeRole: ParticipantRole | null = null;
  public participants: Participant[] = [];
  public activeRoles: ParticipantRole[] = [];
  public id = 0;

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getAllParticipantsRoles(this.idConference).subscribe((roles: ParticipantRole[]) => {
      this.activeRoles = roles;

      if (this.activeRoles.length > 0) {
        this.onRoleChange(this.activeRoles[0]);
      }

    });
  }

  /**
   * Обработать смену роли(тега)
   * @param role зазвание роли, на которую переходим
   */
  public onRoleChange(role: ParticipantRole): void {
    if (this.activeRole === role) {
      return;
    }
    this.activeRole = role;
    this.participantsService.getParticipantsByRole(this.idConference, role).subscribe((participants: Participant[]) => {
      this.participants = participants;
    });
  }

}
