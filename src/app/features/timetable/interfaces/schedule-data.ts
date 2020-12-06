import { ISchedule } from './schedule';

export interface IScheduleData {
  date: string;
  topics: string[];
  sessions: ISchedule[];
}
