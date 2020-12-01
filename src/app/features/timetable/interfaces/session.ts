import {ISpeaker} from './speaker';

export interface ISession {
  id: 0;
  organization: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  canBeFavorited: boolean;
  speaker: ISpeaker;
}
