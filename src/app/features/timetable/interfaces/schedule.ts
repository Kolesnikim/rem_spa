import {ISection} from './section';
/**
 * Интерфейс расписания
 */

export interface ISchedule {
  date: Date;
  sections: ISection[];
}
