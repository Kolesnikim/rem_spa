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
          topics: this.titles[index].map(title => title),
          sessions: schedule[index].sections.map((section, j) => {
            return [...section.sessions];
          })
        }));
        this.extractSessions(this.object[0]);

      });
    });
    this.newData = data;
  }

  extractTopics(table): string[] {
    return Object.keys(table.performances[0]);
  }

  extractSessions({sessions, topics}): any {
    const resultArray = [];
    let needSerialize = true;
    let externalIndex = 0;
    let limitIndex = 0;
    let externalObject = {};


    while (needSerialize) {

      for (let i = 0; i < sessions.length; i++) {
        if (limitIndex < sessions[i].length - 1) {
          limitIndex = sessions[i].length - 1;
        }

        externalObject[topics[i]] = sessions[i][externalIndex];

        if (i === (sessions.length - 1)) {
          resultArray.push(externalObject);
          externalIndex += 1;

          externalObject = {};
        }

      }

      if (externalIndex === limitIndex + 1) {
        needSerialize = false;
      }
    }

    console.log(resultArray);
    console.log(topics);
    console.log(sessions);
  }


  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


