import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { SponsorDetailsComponent } from './components/sponsor-details/sponsor-details.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SponsorsComponent, SponsorDetailsComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    MatIconModule,
  ]
})
export class SponsorsModule { }
