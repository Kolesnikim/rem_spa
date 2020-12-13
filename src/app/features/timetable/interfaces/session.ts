import { Speaker } from './speaker';

/**
 * Интерфейс выступления на конференции
 */
export interface Session {
  id: number;
  organization: string;
  title: string;
  startTime?: Date;
  endTime?: Date;
  location: string;
  canBeFavorited: boolean;
  speaker?: Speaker;
}
