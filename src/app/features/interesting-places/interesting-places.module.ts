import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestingPlacesRoutingModule } from './interesting-places-routing.module';
import { InterestingPlacesComponent } from './interesting-places.component';


@NgModule({
  declarations: [InterestingPlacesComponent],
  imports: [
    CommonModule,
    InterestingPlacesRoutingModule
  ]
})
export class InterestingPlacesModule { }
