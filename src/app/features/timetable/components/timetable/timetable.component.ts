import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/scheduleService/schedule.service';
import { formatDate } from '@angular/common';
import { PreviousDataForSchedule } from '../../interfaces/previous-data-for-schedule';
import { ScheduleData } from '../../interfaces/schedule-data';
import { Schedule } from '../../interfaces/schedule';
import { Session } from '../../interfaces/session';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less'],
  providers: [CdkVirtualScrollViewport]
})
export class TimetableComponent implements OnInit {
  dataForSchedule: ScheduleData[] | undefined;
  prevDataForSchedule: PreviousDataForSchedule[] | undefined;

  ITEM_SIZE = 48;

  @ViewChild(CdkVirtualScrollViewport)
  viewPort: CdkVirtualScrollViewport | undefined;

  offset = 0;

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
      this.prevDataForSchedule = this.extractScheduleFromResponse(schedule);
      this.dataForSchedule = this.prevDataForSchedule.map(date => ({...date, sessions: this.extractSessions(date)}));

      this.viewPort?.scrolledIndexChange
        .pipe(
          map(() => +!!this.viewPort?.getOffsetToRenderedContentStart() * -1),
          distinctUntilChanged(),
        )
        .subscribe(offset => (this.offset = offset));

      this.viewPort?.renderedRangeStream.subscribe(range => {
        this.offset = range.start * -this.ITEM_SIZE;
      });
    });
  }

  /**
   * Метод обрабатывающий запрос таким обазом, чтобы возвращаемое значение
   * имело поля даты, названий секций и выступлений
   */
  public extractScheduleFromResponse(schedule: Schedule[]): PreviousDataForSchedule[] {
    const dates = schedule.map(date => formatDate(date.date, 'd MMMM', 'ru'));
    const titles = schedule.map(date => date.sections.map(section => section.title));

    return dates.map((date, index) => ({
      date,
      topics: titles[index].map(title => title),
      sessions: schedule[index].sections.map((section) => {
        return [...section.sessions];
      })
    }));
  }

  /**
   * Хук, отвечающий за форматирование сессий таким образом, чтобы
   * выводилось построчное отображение массивами
   */
  public extractSessions(schedule: PreviousDataForSchedule): Session[][] {
    const emptySession: Session = {
      id: 0,
      organization: '',
      title: '',
      location: '',
      canBeFavorited: false,
    };

    const { sessions } = schedule;
    const resultArray: Session[][] = [];
    let needIterate = true;
    let externalIndex = 0;
    let limitIndex = 0;
    let externalArray: Session[] = [];
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




