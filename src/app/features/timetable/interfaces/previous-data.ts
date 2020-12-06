import { ISession } from './session';

export interface IPreviousData {
  date: string;
  topics: string[];
  sessions: ISession[][];
}
