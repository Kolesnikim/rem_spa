import { Component, Input, OnInit } from '@angular/core';
import { InterestingPlace } from '../../models/interesting-place.model';

@Component({
  selector: 'app-interesting-place-card',
  template: `
  <mat-card class="example-card">
    <mat-card-content>
      <img mat-card-image src={{this.place.imageUrl}} alt="Photo of a Shiba Inu">
      <mat-card-title>{{this.place.name}}</mat-card-title>
      <p>{{this.place.description}}</p>
    </mat-card-content>
  <mat-card-actions>
    <p>{{this.place.address}}</p>
    <p>{{this.place.workingHours}}</p>
    <p>{{this.place.phoneNumber}}</p>
    <a>{{this.place.webSite}}</a>
    <a>{{this.place.email}}</a>
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
