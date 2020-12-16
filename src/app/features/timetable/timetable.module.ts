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
import { ScheduleService } from './services/scheduleService/schedule.service';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [TimetableComponent, PerformanceComponent, CommentsComponent, CommentFormComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSliderModule,
    ScrollingModule
  ],
  providers: [PerformanceService, ScheduleService]
})
export class TimetableModule { }
