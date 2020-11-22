import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants.component';
import { ParticipantCardComponent } from './components/participant-card/participant-card.component';
import { ParticipantDetailsComponent } from './components/participant-details/participant-details.component';

@NgModule({
  declarations: [ParticipantsComponent, ParticipantCardComponent, ParticipantDetailsComponent],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class ParticipantsModule { }
