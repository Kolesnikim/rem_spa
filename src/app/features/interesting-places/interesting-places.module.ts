import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestingPlacesRoutingModule } from './interesting-places-routing.module';
import { InterestingPlacesComponent } from './interesting-places.component';
import { InterestingPlaceCardComponent } from './components/interesting-place-card/interesting-place-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [InterestingPlacesComponent, InterestingPlaceCardComponent],
  imports: [
    CommonModule,
    InterestingPlacesRoutingModule,
    MatCardModule
  ]
})
export class InterestingPlacesModule { }
