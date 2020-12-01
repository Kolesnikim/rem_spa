import { Component, OnInit } from '@angular/core';
import { data } from '../../services/fake-data';
import { Router } from '@angular/router';
import {ScheduleService} from '../../services/scheduleService/schedule.service';
import {ISchedule} from '../../interfaces/schedule';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = [];
  newData: any;
  bigdata: ISchedule[] = [];
  dates: any[];
  titles: any[];
  datas: any[];
  param: any;
  object: any;
  object2: any;

  constructor(private router: Router, private schedule: ScheduleService) {
  }

  ngOnInit(): void {
    this.schedule.fetchSchedule().subscribe(() => {
      this.schedule.scheduleSubject.subscribe(schedule => {
        this.dates = schedule.map(date => formatDate(date.date, 'd MMMM', 'ru'));
        this.titles = schedule.map(date => date.sections.map(section => section.title));

        this.object = this.dates.map((date, index) => ({
          date,
          topics: this.titles[index].map(title => ({title})),
          sessions: schedule[index].sections.map((section, j) => {
            return {
              [`${section.title}`]: [...section.sessions]
            };
          })
        }));
        console.log(this.extractArray(schedule[0]));
      });
    });
    this.newData = data;
  }

  extractTopics(table): string[] {
    return Object.keys(table.performances[0]);
  }

  extractArray(arr): any {
    const result = [];
    let needIterate = true;
    let num = 0;
    while (needIterate) {
      let sessionIdx = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < arr.sections.length; i++) {
        if (arr.sections[i].sessions.length > sessionIdx) {
          result.push(arr.sections[i].sessions[sessionIdx]);
        }
      }

      sessionIdx += 1;
      num++;
      if (result.length > 20) {
        needIterate = false;
      }
    }
    return result;
  }

  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


