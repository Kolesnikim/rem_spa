import { Component, Input, OnInit } from '@angular/core';
import { InterestingPlace } from '../../models/interesting-place.model';

@Component({
  selector: 'app-interesting-place-card',
  templateUrl: './interesting-place-card.component.html',
  styleUrls: ['./interesting-place-card.component.scss']
})
export class InterestingPlaceCardComponent implements OnInit {
  @Input() place: InterestingPlace;

  constructor() {}

  ngOnInit(): void {}

}
