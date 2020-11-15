import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './components/timetable/timetable.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [TimetableComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class TimetableModule { }
