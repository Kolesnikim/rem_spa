import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './models/participant.model';
import { ParticipantRole } from './models/interfaces/participantRole.interface';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
})

export class ParticipantsComponent implements OnInit {
  public idConference = 1;
  private itemsPerPage = 25;
  public activeRole: ParticipantRole | null = null;
  public activeRoles: ParticipantRole[] = [];
  public participants: Participant[] = [];

  constructor(private participantsService: ParticipantsService) {
  }
  ngOnInit(): void {
    this.participantsService.getAllParticipantsRoles(this.idConference).subscribe((roles: ParticipantRole[]) => {
      this.activeRoles = roles;
      if (this.activeRoles.length > 0) {
        this.onRoleChange(this.activeRoles[0]);
      }
    });
  }

  /**
   * Вызов бесконечного скролла
   */
  public onScroll(): void {
    if (this.activeRole !== null) {
      this.participantsService.getParticipantsByRole(this.idConference, this.activeRole, this.participants.length, this.itemsPerPage)
        .subscribe((members: Participant[]) => {
          this.participants.push(...members);
        });
    }
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
    this.participantsService.getParticipantsByRole(this.idConference, role, 0, this.itemsPerPage)
      .subscribe((members: Participant[]) => {
        this.participants = members;
    });
  }
}
