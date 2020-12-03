import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './models/participant.model';
import { ParticipantRole } from './models/participantRole.model';
@Component({
  selector: 'app-participants',
  template: `
  <div class='participans_container'>
    <div class='participans_board'>
      <nav class='participans_nav'>
        <ul class='nav'>
          <li *ngFor="let role of activeRoles" class='nav_item'>
            <p [class.nav_link] = "true" [class.active] ="role === activeRole" (click)='onRoleChange(role)'>{{role.alias}}</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class='participans_content'>
        <ul class = 'grid_wrapper'>
          <li *ngFor="let user of participants" class='participant_element'>
            <a routerLink="participant/{{user.id}}/details" class = 'participant_link'>
              <app-participant-card [participant]="user" [id]="user.id" ></app-participant-card>
            </a>
          </li>
        </ul>
    </div>
  </div>`,
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  public activeRole: ParticipantRole;
  public participants: Participant[];
  public activeRoles: ParticipantRole[];
  public id: number;

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getAllParticipantsRoles().subscribe((roles: ParticipantRole[]) => {
      this.activeRoles = [...roles];

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
    this.participantsService.getParticipantsByRole(role, 0, 999).subscribe((participants: Participant[]) => {
      this.participants = participants;
    });
  }

}
