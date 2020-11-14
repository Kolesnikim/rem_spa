import { Component, OnInit } from '@angular/core';
import {data} from '../../services/fake-data';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent {
  displayedColumns: string[] = [];
  newData = data;

  constructor() {
  }

  extractTopics(table): any[] {
    return Object.keys(table.performances[0]);
  }
}


