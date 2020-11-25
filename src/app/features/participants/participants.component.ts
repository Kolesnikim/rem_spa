import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './models/participant.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-participants',
  template: `
  <router-outlet></router-outlet>
  <div class='participans_container'>
    <div class='participans_board'>
      <nav class='participans_nav'>
        <ul class='nav'>
          <li *ngFor="let tag of participantsTag" class='nav_item'>
            <p [class.nav_link] = "true" [class.active] ="tag === activeTag" (click)='onTagChange(tag)'>{{tag}}</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class='participans_content'>
      <div class = 'grid_wrapper'>
        <app-participant-card *ngFor="let user of participants" [participant]="user" [id]="user.id" ></app-participant-card>
      </div>
    </div>
  </div>`,
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  participantsTag: string[] = ['Участники', 'Организаторы'];
  activeTag: string;
  participants: Participant[];

  id: number;

  constructor( private participantsServer: ParticipantsService){}

  ngOnInit(): void {
    this.participantsServer.getAllParticipants().subscribe((participants: Participant[]) => {
      this.participants = participants;
    });

    this.activeTag = this.participantsTag[0];
  }

  onTagChange(tag: string): void {
    if (this.activeTag === tag) {
      return;
    }
    this.activeTag = tag;
  }

}
