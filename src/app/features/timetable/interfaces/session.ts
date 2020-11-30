import {ISpeaker} from './speaker';

export interface ISession {
  id: 0;
  organization: string;
  title: string;
  startTime: Date;
  endTime: Date;
  location: string;
  canBeFavorited: boolean;
  speaker: ISpeaker;
}
