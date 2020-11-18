import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetableComponent } from './components/timetable/timetable.component';
import { PerformanceComponent } from './components/performance/performance.component';

const routes: Routes = [
  { path: '', component: TimetableComponent },
  { path: 'performance/:id', component: PerformanceComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
