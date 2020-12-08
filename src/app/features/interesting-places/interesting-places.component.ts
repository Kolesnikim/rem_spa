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
      <ya-map [center]="[56.45, 84.96]" [zoom]="13">
        <ya-clusterer [options]="clustererOptions" *ngFor="let onePlece of interestingPlaces; let i = index">
          <ya-placemark [geometry]="coordinates[i]"
          [properties]="{hintContent: onePlece.name,
                        balloonContent: onePlece.name}">
          </ya-placemark>
        </ya-clusterer>
      </ya-map>
    </div>
  </div>
  `,
  styleUrls: ['./interesting-places.component.scss']
})
export class InterestingPlacesComponent implements OnInit {
  public idConference = 1;
  public interestingPlaces: InterestingPlace[];
  public clustererOptions = {
    preset: 'islands#invertedVioletClusterIcons',
    hasBaloon: false
  };
  public coordinates = [];

  // public placemarkProperties = {
  //   hintContent: 'Hint content',
  //   balloonContent: 'Baloon content',
  // }

  constructor(private interestingOlacesService: InterestingPlacesService) { }

  ngOnInit(): void {
    const onePlaceCoordinate = [];

    this.interestingOlacesService.getInterestingPlaces(this.idConference)
    .subscribe((interestingPlases: InterestingPlace[]) => {
      this.interestingPlaces = interestingPlases;
      console.log(this.interestingPlaces);

      this.interestingPlaces.forEach(el => {
        onePlaceCoordinate.push(el.latitude),
        onePlaceCoordinate.push(el.longitude);
        this.coordinates.push(onePlaceCoordinate);
      });

    });

  }

}
