import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { YaReadyEvent } from 'angular8-yandex-maps';
import { InterestingPlace } from './models/interesting-place.model';
import { InterestingPlacesService } from './services/interesting-places.service';

@Component({
  selector: 'app-interesting-places',
  templateUrl: './interesting-places.component.html',
  styleUrls: ['./interesting-places.component.scss']
})
export class InterestingPlacesComponent implements OnInit {

  constructor(
    private interestingOlacesService: InterestingPlacesService,
    private vps: ViewportScroller
  ) { }

  public idConference = 1;
  public interestingPlaces: InterestingPlace[];
  public coordinates = [];

  ngOnInit(): void {
    const onePlaceCoordinate = [];

    this.interestingOlacesService.getInterestingPlaces(this.idConference)
    .subscribe((interestingPlases: InterestingPlace[]) => {
      this.interestingPlaces = interestingPlases;

      this.interestingPlaces.forEach(el => {
        onePlaceCoordinate.push(el.latitude),
        onePlaceCoordinate.push(el.longitude);
        this.coordinates.push(onePlaceCoordinate);
      });

    });

  }

  /**
   * Oбработать событие наведения мыши на метку
   */
  public onMouseEnter($event: YaReadyEvent): void{
    $event.target.options.set('preset', 'islands#greenIcon');
  }

  /**
   * Обработать событие отведения мыши с метки
   */
  public onMouseLeave($event: YaReadyEvent): void{
    $event.target.options.unset('preset');
  }

  /**
   * Обработать событие клика по метке на карте
   */
  public onPlacemarkClick(id: string): void {
    this.vps.scrollToAnchor(id);
  }
}
