import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './components/timetable/timetable.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PerformanceComponent } from './components/performance/performance.component';
import { PerformanceService } from './services/performanceService/performance.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [TimetableComponent, PerformanceComponent, CommentsComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
  providers: [PerformanceService]
})
export class TimetableModule { }
