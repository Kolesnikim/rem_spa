import { Component, OnInit } from '@angular/core';
import { InterestingPlace } from './models/interesting-place.model';
import { InterestingPlacesService } from './services/interesting-places.service';

@Component({
  selector: 'app-interesting-places',
  template: `
  <div class='content'>
    <div class = 'interesting-cards_wrapper' *ngFor="let onePlece of interestingPlaces">
    <app-interesting-place-card [place]="onePlece"></app-interesting-place-card>
    </div>
    <div id = 'map' class='map'>
    </div>
  </div>
  `,
  styleUrls: ['./interesting-places.component.scss']
})
export class InterestingPlacesComponent implements OnInit {
  public idConference = 1;
  public interestingPlaces: InterestingPlace[];

  constructor(private interestingOlacesService: InterestingPlacesService) { }

  ngOnInit(): void {
    this.interestingOlacesService.getInterestingPlaces(this.idConference)
    .subscribe((interestingPlases: InterestingPlace[]) => {
      this.interestingPlaces = interestingPlases;
      console.log(this.interestingPlaces);
    });

  }

}
