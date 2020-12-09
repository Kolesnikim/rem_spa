import { ISpeaker } from './speaker';

/**
 * Интерфейс выступления на конференции
 */
export interface ISession {
  id: number;
  organization: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  canBeFavorited: boolean;
  speaker: ISpeaker;
}
