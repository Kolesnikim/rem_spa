import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './models/participant.model';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { ParticipantRole } from './models/participantRole.model';
@Component({
  selector: 'app-participants',
  template: `
  <router-outlet></router-outlet>
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
  activeRole: ParticipantRole;
  participants: Participant[];
  activeRoles: ParticipantRole[];

  id: number;

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getAllParticipantsRoles().subscribe((roles: ParticipantRole[]) => {
      this.activeRoles = [];

      // Чтобы отфильтровать пустые, запросим по всем ролям участников
      const request = roles.map((role: ParticipantRole) => {
        return this.participantsService.getParticipantsByRole(role, 0, 1);
      });

      forkJoin(request).subscribe((result: Participant[][]) => {
        for (let i = 0; i < roles.length; i++) {
          const role = roles[i];
          const participants = result[i];
          if (participants.length > 0) {
            this.activeRoles.push(role);
          }
        }

        if (this.activeRoles.length > 0) {
          this.onRoleChange(this.activeRoles[0]);
        }

      });
    });
  }

  onRoleChange(role: ParticipantRole): void {
    if (this.activeRole === role) {
      return;
    }
    this.activeRole = role;
    this.participantsService.getParticipantsByRole(role, 0, 999).subscribe((participants: Participant[]) => {
      this.participants = participants;
    });
  }

}
