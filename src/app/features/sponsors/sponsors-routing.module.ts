import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorDetailsComponent } from './components/sponsor-details/sponsor-details.component';

import { SponsorsComponent } from './sponsors.component';

const routes: Routes = [
  { path: '', component: SponsorsComponent },
  { path: 'sponsor/:id/details', component: SponsorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
