import { Component, OnInit } from '@angular/core';
import { data } from '../../services/fake-data';
import { Router } from '@angular/router';
import {ScheduleService} from '../../services/scheduleService/schedule.service';
import {ISchedule} from '../../interfaces/schedule';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = [];
  newData: any;
  bigdata: ISchedule;

  constructor(private router: Router, private schedule: ScheduleService) {
  }

  ngOnInit(): void {
    this.schedule.fetchSchedule().subscribe(res => {
      this.bigdata = res;
    });
    this.newData = data;
  }

  extractTopics(table): string[] {
    return Object.keys(table.performances[0]);
  }

  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


