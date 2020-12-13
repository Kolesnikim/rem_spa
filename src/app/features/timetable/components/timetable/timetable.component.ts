import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/scheduleService/schedule.service';
import { formatDate } from '@angular/common';
import { IPreviousData } from '../../interfaces/previous-data';
import { IScheduleData } from '../../interfaces/schedule-data';
import { ISchedule } from '../../interfaces/schedule';
import { ISession } from '../../interfaces/session';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit {
  data: IScheduleData[] | undefined;
  prevData: IPreviousData[] | undefined;

  constructor(
    private router: Router,
    private schedule: ScheduleService) {
  }

  /**
   * Хук, срабатывающий при старте и подписывающийся на запрос расписания
   * Ответ с сервера форматируется етодами extractScheduleFromResponse
   * и extractSessions
   */
  ngOnInit(): void {
    this.schedule.fetchSchedule().subscribe(schedule => {
      this.prevData = this.extractScheduleFromResponse(schedule);
      this.data = this.prevData.map(date => ({...date, sessions: this.extractSessions(date)}));
    });
  }

  /**
   * Метод обрабатывающий запрос таким обазом, чтобы возвращаемое значение
   * имело поля даты, названий секций и выступлений
   */
  public extractScheduleFromResponse(schedule: ISchedule[]): IPreviousData[] {
    let dates: string[];
    let titles: string[][];
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

  /**
   * Хук, отвечающий за форматирование сессий таким образом, чтобы
   * выводилось построчное отображение массивами
   */
  public extractSessions(schedule: IPreviousData): ISession[][] {
    const emptySession: ISession = {
      id: 0,
      organization: '',
      title: '',
      location: '',
      canBeFavorited: false,
    };

    const { sessions } = schedule;
    const resultArray: ISession[][] = [];
    let needIterate = true;
    let externalIndex = 0;
    let limitIndex = 0;
    let externalArray: ISession[] = [];
    let start: Date | undefined;


    while (needIterate) {
      for (let i = 0; i < sessions.length; i++) {
        if (limitIndex < sessions[i].length - 1) {
          limitIndex = sessions[i].length - 1;
        }

        if (!start) {
          sessions.forEach(el => {
            const date = el[externalIndex]?.startTime;
            if (date) {
              if (!start || start > date) {
                start = date;
              }
            }
          });
        }

        if (sessions[i][externalIndex]) {
          if (sessions[i][externalIndex].startTime !== start) {
            const el = sessions[i].find(x => x?.startTime === start);
            if (el) {
              externalArray.push(el);
            } else {
              externalArray.push(emptySession);
            }
          } else {
            externalArray.push(sessions[i][externalIndex]);
          }
        } else {
          const el = sessions[i].find(x => x?.startTime === start);
          if (el) {
            externalArray.push(el);
          } else {
            externalArray.push(emptySession);
          }
        }

        if (i === (sessions.length - 1)) {
          resultArray.push(externalArray);
          externalIndex += 1;
          externalArray = [];
          start = undefined;
        }
      }

      if (externalIndex === limitIndex + 1) {
        needIterate = false;
      }
    }
    return resultArray;
  }

  /**
   * Метод, ответственный за ридерект на страницу выступленя
   */
  public showPerformance(id: number): void {
    this.router.navigate(['/schedule', `performance`, `${id}`]);
  }
}


