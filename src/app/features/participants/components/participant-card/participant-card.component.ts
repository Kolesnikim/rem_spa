import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-participant-card',
  template: `
  <mat-card class="example-card" id = '123'>
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title>{{participant.fullName}}</mat-card-title>
      <mat-card-subtitle>
        <p class= 'organization'>{{participant.organizationName}}</p>
        <p>{{position}}</p>
      </mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Фоторафия Участника">
    <mat-card-content>
      <p>
        Краткая информация об участнике
      </p>
    </mat-card-content>
    <mat-card-actions>
      <a routerLink="participants/information"  href='participants/information'>Подробная информация</a>
    </mat-card-actions>
    </mat-card>
    ` ,
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: Participant;
  fullName: string;
  organizationName: string;
  photoUrl: string;
  position: string;

  constructor() { }

  ngOnInit(): void {
  }

}
