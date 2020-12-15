import { Session } from './session';

/**
 * Интерфейс расписания после вызова фугкции extractSessions
 */
export interface ScheduleData {
  date: string;
  topics: string[];
  sessions: Session[][];
}
