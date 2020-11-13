import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './components/timetable.component';


@NgModule({
  declarations: [TimetableComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MatTableModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class TimetableModule { }
