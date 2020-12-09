
import { ISessionsForTable } from './sessions-for-table';

/**
 * Интерфейс расписания после вызова фугкции extractSessions
 */
export interface IScheduleData {
  date: string;
  topics: string[];
  sessions: ISessionsForTable[];
}
