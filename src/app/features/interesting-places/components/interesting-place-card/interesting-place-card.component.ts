import { Component, Input, OnInit } from '@angular/core';
import { InterestingPlace } from '../../models/interesting-place.model';

@Component({
  selector: 'app-interesting-place-card',
  template: `
  <mat-card class="place-card">
    <mat-card-content>
      <img mat-card-image src={{this.place.imageUrl}} alt="Photo of a Shiba Inu">
      <mat-card-title>{{this.place.name}}</mat-card-title>
      <p>{{this.place.description}}</p>
    </mat-card-content>
  <mat-card-actions>
    <ul class='place-information-list'>
      <li>
        <mat-icon aria-hidden="false" aria-label="Example home icon">place</mat-icon>
        {{this.place.address}}
      </li>
      <li>
        <mat-icon aria-hidden="false" aria-label="Example home icon">schedule</mat-icon>
        {{this.place.workingHours}}
      </li>
      <li>
        <mat-icon aria-hidden="false" aria-label="Example home icon">phone</mat-icon>
        {{this.place.phoneNumber}}
      </li>
      <li>
        <mat-icon aria-hidden="false" aria-label="Example home icon">public</mat-icon>
        <a href = '{{this.place.webSite}}'>Веб-сайт</a>
      </li>
      <li>
        <mat-icon aria-hidden="false" aria-label="Example home icon">mail</mat-icon>
        {{this.place.email}}
      </li>
    </ul>
  </mat-card-actions>
</mat-card>
  `,
  styleUrls: ['./interesting-place-card.component.scss']
})
export class InterestingPlaceCardComponent implements OnInit {
  @Input() place: InterestingPlace;

  constructor() { }

  ngOnInit(): void {
  }

}
