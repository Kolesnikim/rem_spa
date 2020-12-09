import { ISession } from './session';

/**
 * Интерфейс расписания после вызова фугкции extractScheduleFromResponse
 */
export interface IPreviousData {
  date: string;
  topics: string[];
  sessions: ISession[][];
}
