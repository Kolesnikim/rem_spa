import {ISession} from './session';

/**
 * Интерфейс расписания
 */
export interface ISchedule {
  id: 0;
  title: string;
  location: string;
  sessions: ISession[];
}
