import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestingPlacesComponent } from './interesting-places.component';

const routes: Routes = [{ path: '', component: InterestingPlacesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestingPlacesRoutingModule { }
