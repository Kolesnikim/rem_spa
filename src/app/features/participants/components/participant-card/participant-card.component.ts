import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-card',
  template: `
  <mat-card class="example-card" id = '123'>
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title>Имя Участника</mat-card-title>
      <mat-card-subtitle>Организация</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Фоторафия Участника">
    <mat-card-content>
      <p>
        Краткая информация об участнике
      </p>
    </mat-card-content>
    <mat-card-actions>
    </mat-card-actions>
    </mat-card>
    ` ,
    // <a routerLink="participants/information"  href='participants/information'>Подробная информация</a>
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
