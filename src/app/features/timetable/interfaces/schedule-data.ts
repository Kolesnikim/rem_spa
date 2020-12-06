import { ISchedule } from './schedule';

/**
 * Интерфейс данных после трансформации
 */
export interface IScheduleData {
  date: string;
  topics: string[];
  sessions: ISchedule[];
}
