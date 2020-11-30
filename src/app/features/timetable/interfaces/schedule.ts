import {ISession} from './session';

export interface ISchedule {
  id: 0;
  title: string;
  location: string;
  sessions: ISession[];
}
