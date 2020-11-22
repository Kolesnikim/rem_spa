import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantDetailsComponent } from './components/participant-details/participant-details.component';

import { ParticipantsComponent } from './participants.component';

const routes: Routes = [
{ path: '', component: ParticipantsComponent },
{ path: 'participants/information', component: ParticipantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
