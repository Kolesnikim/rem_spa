import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-participant-card',
  template: `
  <mat-card class="participant_card" id="id">
    <mat-card-header>
      <div mat-card-avatar class="example-header-image" [style.backgroundImage]="photoUrl"></div>
      <mat-card-title>{{participant.fullName}}</mat-card-title>
      <mat-card-subtitle>
        <p class= 'organization'>{{participant.organizationName}}</p>
        <p>{{participant.position}}</p>
      </mat-card-subtitle>
    </mat-card-header>
    <mat-card-actions>
      <a routerLink="participant/{{id}}/details">Подробная информация</a>
    </mat-card-actions>
    </mat-card>
    ` ,
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: Participant;
  id: number;
  photoUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.id = this.participant.id;
    this.photoUrl = `url(${this.participant.photoUrl})`;
  }

}
