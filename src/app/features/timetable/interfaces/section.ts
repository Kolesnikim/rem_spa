import { ISession } from './session';

export interface ISection {
  id: number;
  location: string;
  title: string;
  sessions: ISession[];
}
