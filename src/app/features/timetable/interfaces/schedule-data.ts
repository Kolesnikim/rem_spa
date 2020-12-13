import { ISession } from './session';

/**
 * Интерфейс расписания после вызова фугкции extractSessions
 */
export interface IScheduleData {
  date: string;
  topics: string[];
  sessions: ISession[][];
}
