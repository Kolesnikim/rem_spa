import { Component, OnInit } from '@angular/core';
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
  data: any;
  prevData: any;
  bigdata: ISchedule[] = [];

  constructor(private router: Router, private schedule: ScheduleService) {
  }

  ngOnInit(): void {
    this.schedule.fetchSchedule().subscribe(() => {
      this.schedule.scheduleSubject$.subscribe(schedule => {
        this.prevData = this.extractScheduleFromResponse(schedule);
        this.data = this.prevData.map(date => ({...date, sessions: this.extractSessions(date)}));
      });
    });
  }

  extractScheduleFromResponse(schedule): any[] {
    let dates;
    let titles;
    let data;

    dates = schedule.map(date => formatDate(date.date, 'd MMMM', 'ru'));
    titles = schedule.map(date => date.sections.map(section => section.title));
    data = dates.map((date, index) => ({
      date,
      topics: titles[index].map(title => title),
      sessions: schedule[index].sections.map((section) => {
        return [...section.sessions];
      })
    }));
    return data;
  }

  extractSessions({sessions, topics}): any[] {
    const resultArray = [];
    let needIterate = true;
    let externalIndex = 0;
    let limitIndex = 0;
    let externalObject = {};
    let start = null;


    while (needIterate) {
      for (let i = 0; i < sessions.length; i++) {
        if (limitIndex < sessions[i].length - 1) {
          limitIndex = sessions[i].length - 1;
        }

        if (!start) {
          sessions.forEach(el => {
            if (!start || start > el[externalIndex]?.startTime) {
              start = el[externalIndex]?.startTime;
            }
          });
        }

        if (sessions[i][externalIndex]) {
          if (sessions[i][externalIndex].startTime !== start) {
            const el = sessions[i].find(x => x?.startTime === start);
            if (el) {
              externalObject[topics[i]] = el;
            } else {
              externalObject[topics[i]] = {};
            }
          } else {
            externalObject[topics[i]] = sessions[i][externalIndex];
          }
        } else {
          const el = sessions[i].find(x => x?.startTime === start);
          if (el) {
            externalObject[topics[i]] = el;
          } else {
            externalObject[topics[i]] = {};
          }
        }

        if (i === (sessions.length - 1)) {
          resultArray.push(externalObject);
          externalIndex += 1;
          externalObject = {};
          start = null;
        }
      }

      if (externalIndex === limitIndex + 1) {
        needIterate = false;
      }
    }
    return resultArray;
  }

  showPerformance(id): void {
    this.router.navigate(['/timetable', `performance`, `${id}`]);
  }
}


