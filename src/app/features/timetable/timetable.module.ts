import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './components/timetable/timetable.component';


@NgModule({
  declarations: [TimetableComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MatTableModule,
  ],
  exports: [
    MatTableModule
  ]
})
export class TimetableModule { }
