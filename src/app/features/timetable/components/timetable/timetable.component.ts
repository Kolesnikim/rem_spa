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

  constructor(private router: Router, private schedule: ScheduleService) {
  }

  ngOnInit(): void {
    this.schedule.fetchSchedule().subscribe(() => {
      this.schedule.scheduleSubject.subscribe(schedule => {
        this.bigdata = schedule;
        this.titles = this.bigdata.map(el => el.title);
        this.extractSessio();

        console.log(this.extractSessio());
      });
    });
    this.newData = data;
  }

  extractTopicsFromServer(): string[] {
    return this.bigdata.map(el => el.title);
  }

  extractDatesFromServer(): any {
    const element = this.bigdata[0];
    return new Set(element.sessions.map(section => {
      return formatDate(section.startTime, 'd MMMM', 'ru');
    }));
  }

  extractSessio(): any {
    const dates = Array.from(this.extractDatesFromServer());
    const firstVersion = dates.map(date => (
        {
          date,
          topics: this.bigdata.map(topic => topic.title),
          performances: this.bigdata.map((topic, index) => {
              return topic.sessions.filter(session => {
                return formatDate(session.startTime, 'd MMMM', 'ru') === date;
              });
            }
          )
        }
      )
    );

    return firstVersion;
  }

  extractTopics(table): string[] {
    return Object.keys(table.performances[0]);
  }

  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


